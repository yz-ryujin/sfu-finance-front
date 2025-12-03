"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="login-root flex min-h-screen w-full bg-gray-50 relative">
      <div className="flex flex-col flex-1 z-10 justify-center items-center w-full px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/">
            <Image
              src="/assets/img/logo/unidesc_logo.svg"
              width={250}
              height={60}
              alt="Logotipo Unidesc"
            />
          </Link>
        </div>

        {/* Form Card */}
        <div className="formbg-outer w-full flex justify-center">
          <div className="formbg max-w-md w-full bg-white rounded-2xl shadow-2xl p-10 sm:p-12">
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              Área Administrativa
            </h2>

            <form className="space-y-6">

              {/* Email Field */}
              <div className="field flex flex-col">
                <label htmlFor="email" className="mb-2 font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Password Field */}
              <div className="field flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="font-medium text-gray-800">
                    Senha
                  </label>
                  <a href="#" className="text-blue-500 text-sm hover:underline">
                    Esqueceu sua senha?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*******"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Remember Me */}
              <div className="field flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="font-medium text-gray-700">
                  Lembrar-me
                </label>
              </div>

              {/* Submit Button */}
              <div className="field">
                <Link href="/dashboard">
                  <button
                    type="button"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                  >
                    Continuar
                  </button>
                </Link>
              </div>

              {/* Google Login */}
              <div className="field">
                <a
                  href="#"
                  className="block text-center text-blue-600 font-semibold hover:underline"
                >
                  Entrar com Google
                </a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
