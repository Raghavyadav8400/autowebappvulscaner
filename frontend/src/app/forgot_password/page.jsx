export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-50">Forgot Password</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          This is a placeholder page for password recovery. In a full application, a password reset flow would send an email link or OTP.
        </p>
        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
          <p className="text-slate-700 dark:text-slate-300">Enter your email address on the signup screen to create an account, then come back here for a reset flow.</p>
        </div>
      </div>
    </div>
  );
}
