"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Loader2, CheckCircle2, ShieldCheck, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
  const [step, setStep] = useState(1); // 1 = Details, 2 = OTP, 3 = Password
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setStep(2); // Move to OTP verification step
      } else {
        const text = await res.text();
        setError(text || "Failed to send OTP. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Is the backend running?");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      if (res.ok) {
        setStep(3); // Move to password step
      } else {
        const text = await res.text();
        setError(text || "Invalid OTP. Please Try Again.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const text = await res.text();
        setError(text || "Failed to register. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white shadow-xl rounded-3xl p-10 max-w-sm w-full text-center border border-gray-100"
        >
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Complete!</h2>
          <p className="text-gray-500 mb-8">Your account has been successfully created and verified.</p>
          <Link href="/auth/login" className="block w-full py-3 px-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
            Proceed to Login
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDelay: "2s" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-10">
          
          <div className="flex flex-col items-center mb-6">
            <Link href="/">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-black p-2 rounded-xl mb-4 shadow-lg inline-block cursor-pointer"
              >
                <Image
                  src="/Logo.png"
                  alt="CareerMind AI Logo"
                  width={40}
                  height={40}
                  className="rounded-lg object-contain"
                />
              </motion.div>
            </Link>
            
            {/* Step Indicators */}
            <div className="flex items-center justify-center gap-2 mb-4 w-full px-8">
                <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-gray-200'} transition-all duration-300`} />
                <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'} transition-all duration-300`} />
                <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'} transition-all duration-300`} />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight text-center">
              {step === 1 && "Create an account"}
              {step === 2 && "Verify your email"}
              {step === 3 && "Secure your account"}
            </h1>
            <p className="text-gray-500 mt-2 text-sm text-center">
              {step === 1 && "Start your career journey with CareerMind"}
              {step === 2 && `We've sent a 6-digit code to ${email}`}
              {step === 3 && "Choose a strong password"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div 
                key="error"
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: "auto" }} 
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 flex items-center gap-2 mb-5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* STEP 1: Details */}
          {step === 1 && (
            <motion.form 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSendOtp} className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text" value={name} onChange={(e) => setName(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all text-gray-900 sm:text-sm outline-none"
                    placeholder="John Doe" required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all text-gray-900 sm:text-sm outline-none"
                    placeholder="you@example.com" required
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} disabled={isLoading} type="submit"
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-semibold text-white bg-black hover:bg-gray-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <>Next Step <ArrowRight size={18} /></>}
              </motion.button>
            </motion.form>
          )}

          {/* STEP 2: Verify OTP */}
          {step === 2 && (
            <motion.form 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                onSubmit={handleVerifyOtp} className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Verification Code (6-digits)</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                    <ShieldCheck size={18} />
                  </div>
                  <input
                    type="text" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').substring(0, 6))}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all text-gray-900 sm:text-sm outline-none tracking-widest text-lg font-mono text-center"
                    placeholder="000000" required maxLength={6}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">Code expires in 1 minute</p>
              </div>
              <div className="flex gap-3 mt-4">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 px-4 border border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all flex justify-center items-center gap-2">
                    <ArrowLeft size={18} /> Back
                  </button>
                  <motion.button
                    whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} disabled={isLoading || otp.length !== 6} type="submit"
                    className="flex-[2] flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? <Loader2 size={18} className="animate-spin" /> : <>Verify Code</>}
                  </motion.button>
              </div>
            </motion.form>
          )}

          {/* STEP 3: Password */}
          {step === 3 && (
            <motion.form 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                onSubmit={handleRegister} className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all text-gray-900 sm:text-sm outline-none"
                    placeholder="••••••••" required minLength={6}
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} disabled={isLoading} type="submit"
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-semibold text-white bg-black hover:bg-gray-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <>Complete Registration <CheckCircle2 size={18} /></>}
              </motion.button>
            </motion.form>
          )}

          {step === 1 && (
              <div className="mt-8 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                  Sign in
                </Link>
              </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
