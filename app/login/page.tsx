"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     setError("");
    setSuccess("");
  

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
       if (!res.ok) {
        setError(data.message || "Login gagal!");
      } else {
        setSuccess("Login berhasil!");
        // Simpan token ke localStorage / cookie
        localStorage.setItem("token", data.data.token);

        // redirect contoh
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="fixed inset-0 overflow-hidden">
      <BackgroundBeamsWithCollision>
        <div className="flex items-center justify-center w-full h-full px-4 sm:px-6">
          <Card className="w-full max-w-[380px] rounded-2xl shadow-lg bg-white/90 backdrop-blur-md relative z-20">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid w-full max-w-sm gap-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      id="email"
                      placeholder="fulan@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 dark:bg-white text-black"
                    />
                  </div>
                </div>

                <div className="grid w-full max-w-sm gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      id="password"
                      placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 dark:bg-white text-black"
                    />
                  </div>
                </div>

              
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-gray-600">
                      Remember Password
                    </Label>
                  </div>
                  <a href="#" className="text-primary hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <Button 
                type="submit"
                className="w-full bg-primary hover:bg-blue-500 dark:bg-primary text-white rounded-lg">
                  Login
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
