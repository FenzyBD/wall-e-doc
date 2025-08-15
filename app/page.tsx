import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Download, Smartphone, Heart } from "lucide-react"

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Wall-E Wallpapers</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Privacy-First Wallpaper Collection</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <Shield className="w-4 h-4 mr-1" />
            100% Privacy Focused
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Your Privacy is Our Priority</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Wall-E Wallpapers operates completely offline with zero data collection. Enjoy beautiful wallpapers without
            compromising your privacy.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-amber-200 dark:border-amber-800">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg">Fully Offline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                All wallpapers are stored locally on your device. No internet connection required after download.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-800">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg">Zero Data Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                We don't collect, store, or transmit any personal information or usage data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-800">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Download className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg">Free Forever</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                All wallpapers are completely free to download and use on any device.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Policy */}
        <Card className="border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What We Don't Collect</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• Personal information (name, email, phone number)</li>
                <li>• Device identifiers or advertising IDs</li>
                <li>• Location data or GPS coordinates</li>
                <li>• Usage analytics or app behavior data</li>
                <li>• Photos or media from your device</li>
                <li>• Contact lists or social media accounts</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How the App Works</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• All wallpapers are pre-loaded within the app</li>
                <li>• Images are stored locally on your device</li>
                <li>• No internet connection required after installation</li>
                <li>• No servers, databases, or cloud storage involved</li>
                <li>• No user accounts or registration needed</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Permissions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                The app only requests minimal permissions necessary for core functionality:
              </p>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  • <strong>Storage Access:</strong> To save wallpapers to your device's gallery
                </li>
                <li>
                  • <strong>Set Wallpaper:</strong> To apply wallpapers to your home/lock screen
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Third-Party Services</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Wall-E Wallpapers does not integrate with any third-party services, analytics platforms, advertising
                networks, or social media platforms. The app operates in complete isolation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Updates to This Policy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Since we don't collect any data, this privacy policy is unlikely to change. Any updates will be
                reflected in app updates and will maintain our commitment to zero data collection.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/50">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-gray-900 dark:text-white">Made with Privacy in Mind</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Questions about our privacy practices? Since we don't collect any data, there's nothing to worry about!
                Enjoy your Wall-E wallpapers with complete peace of mind.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-500 pt-4 border-t border-amber-200 dark:border-amber-800">
                Last updated: January 2025 • Version 1.0
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
