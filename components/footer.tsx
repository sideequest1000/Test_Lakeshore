import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">LS</span>
              </div>
              <span className="font-bold text-xl">Lake Shore Associates</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md text-pretty">
              Strategic, unbiased, and objective advisory and delivery services to improve your organization's
              productivity and performance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Chicagoland Area</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@lakeshore.is</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/program-management"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Program Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/change-management"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Change Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/vendor-management"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Vendor Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/strategic-execution"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Strategic Execution
                </Link>
              </li>
              <li>
                <Link
                  href="/services/staff-augmentation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Staff Augmentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-foreground transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 Lake Shore Associates. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
