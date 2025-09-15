import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock } from "lucide-react";
import { FaApple, FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function LoginWithBeams() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <BackgroundBeamsWithCollision>
        <div className="flex items-center justify-center w-full h-full px-4 sm:px-6">
          {/* Card Login */}
          <Card className="w-full max-w-[380px] rounded-2xl shadow-lg bg-white/90 backdrop-blur-md relative z-20">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                {/* Email */}
                <div className="grid w-full max-w-sm gap-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      id="email"
                      placeholder="fulan@gmail.com"
                      className="pl-10 dark:bg-white text-black"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="grid w-full max-w-sm gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="pl-10 dark:bg-white text-black"
                    />
                  </div>
                </div>

                {/* Remember + Forgot */}
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

                {/* Login button */}
                <Button className="w-full bg-primary hover:bg-blue-500 dark:bg-primary text-white rounded-lg">
                  Login
                </Button>

                {/* Divider */}
                <div className="flex items-center my-2">
                  <div className="flex-1 h-px bg-gray-300" />
                  <span className="px-2 text-xs text-gray-400">
                    Or Login With
                  </span>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* Social Login */}
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <FaGoogle className="h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
