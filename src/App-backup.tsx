import {
  Header as CarbonHeader,
  HeaderName as CarbonHeaderName,
  HeaderNavigation as CarbonHeaderNavigation,
  HeaderMenuItem as CarbonHeaderMenuItem,
  HeaderGlobalBar as CarbonHeaderGlobalBar,
  HeaderGlobalAction as CarbonHeaderGlobalAction,
  Button as CarbonButton,
} from "@carbon/react";
import { User, ChevronRight } from "@carbon/icons-react";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-xl px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Carbon Header */}
        <CarbonHeader aria-label="IBM Platform Name">
          <a href="#">
            <span className="text-lg font-bold">Inclusive Design Lab</span>
          </a>
          <CarbonHeaderNavigation aria-label="IBM Platform Name">
            <CarbonHeaderMenuItem href="#">Overview</CarbonHeaderMenuItem>
            <CarbonHeaderMenuItem href="#">Products</CarbonHeaderMenuItem>
            <CarbonHeaderMenuItem href="#">Pricing</CarbonHeaderMenuItem>
          </CarbonHeaderNavigation>
          <CarbonHeaderGlobalBar>
            <CarbonHeaderGlobalAction aria-label="User" tooltipAlignment="end">
              <User size={20} />
            </CarbonHeaderGlobalAction>
          </CarbonHeaderGlobalBar>
        </CarbonHeader>

        {/* Hero Section */}
        <section className="white py-16 px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Design for all mankind</h1>
            <p className="text-xl text-gray-600 mb-8">
              Safeguard your critical information effortlessly with our secure
              and automated backup solutions.
            </p>
            <CarbonButton size="lg" kind="primary">
              Try Predictive Cost Analytics
              <ChevronRight size={16} />
            </CarbonButton>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-green-50 py-12 px-8">
          <h2 className="text-center text-2xl mb-8">
            Made to fit your workflow, you are in control
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">90%</div>
              <p className="text-gray-600">
                Power of AI for navigation and communication
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold">10x</div>
              <p className="text-gray-600">
                Achieving faster sales through streamlined processes
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold">25%</div>
              <p className="text-gray-600">
                Reduction in overall costs, attributed to optimized
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 px-8 border-t">
          <div className="text-center">
            <p className="text-gray-600">Copyright © 2024 SaasAble</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
