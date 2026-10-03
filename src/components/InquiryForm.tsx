import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  Instagram,
  Copy,
  Check,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import {
  InquiryFormData,
  FormErrors,
  WebsiteType,
  BudgetTier,
  PreferredStyle
} from '../types';

interface InquiryFormProps {
  initialWebsiteType?: WebsiteType | '';
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialWebsiteType = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    instagramId: '',
    phone: '',
    businessName: '',
    websiteType: initialWebsiteType,
    budget: '',
    description: '',
    preferredStyle: '',
    expectedDeadline: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (initialWebsiteType) {
      setFormData((prev) => ({ ...prev, websiteType: initialWebsiteType }));
    }
  }, [initialWebsiteType]);

  const websiteTypes: WebsiteType[] = [
    'Business Website',
    'Salon Website',
    'Portfolio',
    'E-commerce',
    'Landing Page',
    'School / Education',
    'Personal Website',
    'Custom Website',
    'Other',
  ];

  const budgetOptions: BudgetTier[] = [
    '₹5,000 – ₹10,000',
    '₹10,000 – ₹20,000',
    '₹20,000 – ₹50,000',
    '₹50,000+',
  ];

  const styleOptions: PreferredStyle[] = [
    'Modern',
    'Minimal',
    'Luxury',
    'Dark / Premium',
    'Colorful',
    'AI / Futuristic',
    'Not Sure',
  ];

  const deadlineOptions = [
    'Urgent (Within 1 week)',
    'Standard (2-3 weeks)',
    '1 Month',
    'Flexible / Planning Phase',
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email / Gmail is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.websiteType) {
      newErrors.websiteType = 'Please select a website type';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select your estimated budget';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your website requirements';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please provide a bit more detail (at least 15 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /**
   * Structure ready for Google Sheets / Firebase / Supabase / Email webhook
   */
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepared payload formatted for future DB/API endpoint integration
      const submissionPayload = {
        id: `INQ-${Date.now()}`,
        timestamp: new Date().toISOString(),
        ...formData,
      };

      // Safely persist to browser localStorage as an offline/client lead record
      try {
        const existingInquiries = JSON.parse(
          localStorage.getItem('smit_tech_inquiries') || '[]'
        );
        existingInquiries.push(submissionPayload);
        localStorage.setItem(
          'smit_tech_inquiries',
          JSON.stringify(existingInquiries)
        );
      } catch {
        // Safe fallback if local storage restricted
      }

      /*
        NOTE FOR FUTURE BACKEND INTEGRATION:
        To connect to Google Sheets, Firebase, Supabase, or Email API (e.g. Resend/Formspree):
        - Google Sheets Webhook: await fetch('YOUR_APPS_SCRIPT_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(submissionPayload) });
        - Supabase: await supabase.from('inquiries').insert([submissionPayload]);
        - Firebase: await addDoc(collection(db, 'inquiries'), submissionPayload);
      */

      // Simulated network settling curve (350ms)
      await new Promise((resolve) => setTimeout(resolve, 350));

      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getEmailPrefillUrl = () => {
    if (!submittedData) return 'mailto:smittech21@gmail.com';
    const subject = encodeURIComponent(
      `Website Project Requirement: ${submittedData.websiteType} - ${submittedData.businessName || submittedData.fullName}`
    );
    const body = encodeURIComponent(
      `Hello SMIT TECH AI Team,\n\nI have submitted my website requirements through your website:\n\n` +
      `• Full Name: ${submittedData.fullName}\n` +
      `• Email: ${submittedData.email}\n` +
      `• Instagram ID: ${submittedData.instagramId || 'N/A'}\n` +
      `• Phone: ${submittedData.phone || 'N/A'}\n` +
      `• Business / Brand Name: ${submittedData.businessName || 'N/A'}\n` +
      `• Website Type: ${submittedData.websiteType}\n` +
      `• Budget: ${submittedData.budget}\n` +
      `• Preferred Style: ${submittedData.preferredStyle || 'Not Specified'}\n` +
      `• Expected Deadline: ${submittedData.expectedDeadline || 'Flexible'}\n\n` +
      `• Project Description:\n${submittedData.description}\n\n` +
      `Looking forward to discussing the project with you!`
    );
    return `mailto:smittech21@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const summaryText =
      `SMIT TECH AI - Project Requirement\n` +
      `Name: ${submittedData.fullName}\n` +
      `Email: ${submittedData.email}\n` +
      `Instagram: ${submittedData.instagramId || 'N/A'}\n` +
      `Website Type: ${submittedData.websiteType}\n` +
      `Budget: ${submittedData.budget}\n` +
      `Style: ${submittedData.preferredStyle || 'Standard'}\n` +
      `Description: ${submittedData.description}`;

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      instagramId: '',
      phone: '',
      businessName: '',
      websiteType: '',
      budget: '',
      description: '',
      preferredStyle: '',
      expectedDeadline: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="inquiry" className="relative py-24 sm:py-32 bg-[#06080F]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Project Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Tell Us About Your Website
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Fill out the form and tell us what you want to build.
          </p>
        </div>

        {/* Success Confirmation State */}
        {isSubmitted && submittedData ? (
          <div className="rounded-2xl glass-card border border-emerald-500/30 p-8 sm:p-12 text-center animate-in fade-in zoom-in-95 duration-300 shadow-2xl shadow-emerald-950/40">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
              Request Received!
            </h3>
            <p className="text-base text-slate-300 max-w-lg mx-auto mb-8">
              Thank you for contacting SMIT TECH AI. We'll get back to you soon.
            </p>

            {/* Direct Connect Options */}
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 max-w-xl mx-auto mb-8 text-left space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 text-center sm:text-left">
                Speed up your project — Send directly to our team:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getEmailPrefillUrl()}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Gmail / Email</span>
                </a>

                <a
                  href="https://www.instagram.com/smit_tech_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>DM on Instagram</span>
                </a>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Requirement summary copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy requirements text to paste into Instagram DM</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={handleResetForm}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Submit Another Project Request</span>
            </button>
          </div>
        ) : (
          /* Main Form */
          <form
            onSubmit={handleFormSubmit}
            noValidate
            className="rounded-2xl glass-card border border-white/10 p-6 sm:p-10 shadow-2xl relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                    errors.fullName ? 'border-rose-500/80 bg-rose-950/10' : 'border-white/10 hover:border-white/20'
                  }`}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email / Gmail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Email / Gmail <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                    errors.email ? 'border-rose-500/80 bg-rose-950/10' : 'border-white/10 hover:border-white/20'
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Instagram ID */}
              <div>
                <label
                  htmlFor="instagramId"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Instagram ID <span className="text-slate-500 text-[11px] font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="instagramId"
                  name="instagramId"
                  value={formData.instagramId}
                  onChange={handleChange}
                  placeholder="@yourhandle"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Phone Number <span className="text-slate-500 text-[11px] font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>

              {/* Business / Brand Name */}
              <div className="md:col-span-2">
                <label
                  htmlFor="businessName"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Business / Brand Name <span className="text-slate-500 text-[11px] font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Apex Wellness Spa, Nova Studio, TechCorp"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>

              {/* Website Type */}
              <div>
                <label
                  htmlFor="websiteType"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Website Type <span className="text-rose-400">*</span>
                </label>
                <select
                  id="websiteType"
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0c1024] border text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                    errors.websiteType ? 'border-rose-500/80' : 'border-white/10 hover:border-white/20'
                  }`}
                  aria-invalid={!!errors.websiteType}
                  aria-describedby={errors.websiteType ? 'websiteType-error' : undefined}
                >
                  <option value="" disabled className="bg-[#0c1024] text-slate-400">
                    Select website category...
                  </option>
                  {websiteTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0c1024] text-white">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.websiteType && (
                  <p id="websiteType-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.websiteType}</span>
                  </p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Budget <span className="text-rose-400">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0c1024] border text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                    errors.budget ? 'border-rose-500/80' : 'border-white/10 hover:border-white/20'
                  }`}
                  aria-invalid={!!errors.budget}
                  aria-describedby={errors.budget ? 'budget-error' : undefined}
                >
                  <option value="" disabled className="bg-[#0c1024] text-slate-400">
                    Select budget tier...
                  </option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b} className="bg-[#0c1024] text-white">
                      {b}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p id="budget-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.budget}</span>
                  </p>
                )}
              </div>

              {/* Preferred Style */}
              <div>
                <label
                  htmlFor="preferredStyle"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Preferred Style <span className="text-slate-500 text-[11px] font-normal">(Optional)</span>
                </label>
                <select
                  id="preferredStyle"
                  name="preferredStyle"
                  value={formData.preferredStyle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0c1024] border border-white/10 hover:border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                >
                  <option value="" className="bg-[#0c1024] text-slate-400">
                    Select design style...
                  </option>
                  {styleOptions.map((style) => (
                    <option key={style} value={style} className="bg-[#0c1024] text-white">
                      {style}
                    </option>
                  ))}
                </select>
              </div>

              {/* Expected Deadline */}
              <div>
                <label
                  htmlFor="expectedDeadline"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Expected Deadline <span className="text-slate-500 text-[11px] font-normal">(Optional)</span>
                </label>
                <select
                  id="expectedDeadline"
                  name="expectedDeadline"
                  value={formData.expectedDeadline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0c1024] border border-white/10 hover:border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                >
                  <option value="" className="bg-[#0c1024] text-slate-400">
                    Select target timeline...
                  </option>
                  {deadlineOptions.map((dl) => (
                    <option key={dl} value={dl} className="bg-[#0c1024] text-white">
                      {dl}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Website Description */}
            <div className="mb-8">
              <label
                htmlFor="description"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
              >
                Website Description <span className="text-rose-400">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Briefly describe what your website should do, pages needed (Home, About, Services, Contact, etc.), reference links or features..."
                className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                  errors.description ? 'border-rose-500/80 bg-rose-950/10' : 'border-white/10 hover:border-white/20'
                }`}
                aria-invalid={!!errors.description}
                aria-describedby={errors.description ? 'description-error' : undefined}
              />
              {errors.description && (
                <p id="description-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.description}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-bold tracking-wide text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Processing Request...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT PROJECT REQUEST</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
