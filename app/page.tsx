"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Zap, Shield } from "lucide-react"

export default function BrillanceLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-xl font-bold">Brillance</div>
              <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Writing Assistant</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
              Write better content,
              <br />
              <span className="gradient-text">faster than ever.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-balance leading-relaxed">
              Transform your writing with AI-powered suggestions, grammar checking, and style improvements. Create
              compelling content in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
                Start Writing Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-gray-500">No credit card required • Free forever plan</p>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3 text-left">
                  <div className="h-4 bg-white/5 rounded w-3/4" />
                  <div className="h-4 bg-white/5 rounded w-full" />
                  <div className="h-4 bg-white/5 rounded w-5/6" />
                  <div className="h-8 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded w-2/3 animate-pulse" />
                  <div className="h-4 bg-white/5 rounded w-full" />
                  <div className="h-4 bg-white/5 rounded w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by teams at</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            <div className="text-2xl font-bold">ACME</div>
            <div className="text-2xl font-bold">TechCorp</div>
            <div className="text-2xl font-bold">Innovate</div>
            <div className="text-2xl font-bold">StartupXYZ</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-balance">Everything you need to write brilliantly</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful AI features that help you create better content faster
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white text-2xl">AI-Powered Suggestions</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Get intelligent writing suggestions that understand context and improve your content in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white text-2xl">Grammar & Style Checking</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Advanced grammar checking and style improvements ensure your writing is always polished and
                  professional.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white text-2xl">Lightning Fast</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Write at the speed of thought with instant AI responses and seamless performance across all devices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-balance">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-400">Choose the plan that's right for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <Card className="bg-gray-900 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Free</CardTitle>
                <CardDescription className="text-gray-400">Perfect for trying out Brillance</CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>1,000 words per month</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Basic grammar checking</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>3 AI suggestions per day</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Tier */}
            <Card className="bg-white border-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
                POPULAR
              </div>
              <CardHeader>
                <CardTitle className="text-black text-2xl">Pro</CardTitle>
                <CardDescription className="text-gray-600">For professional writers</CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-bold text-black">$12</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Unlimited words</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Advanced grammar & style</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Unlimited AI suggestions</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-black text-white hover:bg-gray-800">Start Free Trial</Button>
              </CardFooter>
            </Card>

            {/* Enterprise Tier */}
            <Card className="bg-gray-900 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Enterprise</CardTitle>
                <CardDescription className="text-gray-400">For teams and organizations</CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-bold text-white">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom AI training</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-balance">Loved by writers everywhere</h2>
            <p className="text-xl text-gray-400">See what our users have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-gray-900 border-white/10">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                  <div>
                    <CardTitle className="text-white text-lg">Sarah Johnson</CardTitle>
                    <CardDescription className="text-gray-400">Content Writer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  "Brillance has completely transformed my writing workflow. I'm producing better content in half the
                  time. The AI suggestions are incredibly accurate and helpful."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-gray-900 border-white/10">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500" />
                  <div>
                    <CardTitle className="text-white text-lg">Michael Chen</CardTitle>
                    <CardDescription className="text-gray-400">Marketing Manager</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  "The grammar and style checking features are top-notch. Our team's content quality has improved
                  dramatically since we started using Brillance."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-gray-900 border-white/10">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500" />
                  <div>
                    <CardTitle className="text-white text-lg">Emily Rodriguez</CardTitle>
                    <CardDescription className="text-gray-400">Freelance Writer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  "As a freelancer, Brillance has been a game-changer. The Pro plan pays for itself with the time I save
                  on every project. Highly recommended!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">Ready to write brilliantly?</h2>
          <p className="text-xl text-gray-400 text-balance">
            Join thousands of writers who are creating better content with Brillance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Brillance</h3>
              <p className="text-gray-400 text-sm">AI-powered writing assistant for better content.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Brillance. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
