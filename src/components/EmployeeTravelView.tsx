import * as React from "react";
import {
  Search,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  DollarSign,
  CalendarDays,
  CreditCard,
  ArrowRightLeft,
  Calendar,
  MapPin,
  Settings,
  X,
} from "lucide-react";
import { HotelSearchResults } from "./HotelSearchResults";

interface PolicyRule {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

interface EmployeeTravelViewProps {
  settings: {
    marketRateEnabled: boolean;
    marketRateValue: number;
    bookingLeadTime: string;
    payment: string;
  };
  onPolicyClick: () => void;
}

export function EmployeeTravelView({ settings }: EmployeeTravelViewProps) {
  const [activeTab, setActiveTab] = React.useState<"flights" | "hotels">("hotels");
  const [showPolicySidebar, setShowPolicySidebar] = React.useState(false);
  const [expandedPolicy, setExpandedPolicy] = React.useState<string | null>(null);
  const [showSearchResults, setShowSearchResults] = React.useState(false);

  const getLeadTimeDisplay = () => {
    switch (settings.bookingLeadTime) {
      case "1-week":
        return "Book 7 days in advance";
      case "2-weeks":
        return "Book 14 days in advance";
      case "1-month":
        return "Book 30 days in advance";
      default:
        return "Book 7 days in advance";
    }
  };

  const getPaymentDisplay = () => {
    switch (settings.payment) {
      case "prepaid-only":
        return "Prepaid Hotels Only";
      case "flex":
        return "Flex – Prepaid, or pay on site";
      default:
        return "Prepaid Hotels Only";
    }
  };

  const flightRules: PolicyRule[] = [
    {
      icon: <DollarSign className="w-4 h-4" />,
      title: "Up to 15% above market rate",
      subtitle: "Max $1 per flight",
    },
    {
      icon: <CalendarDays className="w-4 h-4" />,
      title: "Book 7 days in advance",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Cabin class rules",
    },
  ];

  const hotelRules: PolicyRule[] = [
    {
      icon: <DollarSign className="w-4 h-4" />,
      title: `Up to ${settings.marketRateValue}% above market rate`,
      subtitle: "Max $1 per night",
    },
    {
      icon: <CalendarDays className="w-4 h-4" />,
      title: getLeadTimeDisplay(),
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: getPaymentDisplay(),
    },
  ];

  return (
    <div className="bg-[#f7f7f7] min-h-screen w-full font-['Inter',system-ui,sans-serif]">
      {/* Hotel Search Results */}
      {showSearchResults && (
        <HotelSearchResults
          paymentSetting={settings.payment}
          onClose={() => setShowSearchResults(false)}
        />
      )}

      {/* Top Banner */}
      <div className="bg-[#1c1c28] text-white text-sm py-2.5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-gray-300">See how Ramp can save your business time and money.</span>
          <a href="#" className="underline hover:no-underline ml-1">
            Learn more ↗
          </a>
        </div>
        <button className="bg-[#D4E94B] text-black px-4 py-1.5 rounded text-sm font-medium hover:bg-[#c5da3c] transition-colors">
          Get started ↗
        </button>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Sidebar - Navigation */}
        <div className="w-[200px] bg-[#fafafa] border-r border-[#e5e5e5] min-h-[calc(100vh-44px)] flex flex-col">
          {/* Logo */}
          <div className="p-4 flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1c1c28"/>
              <path d="M2 17L12 22L22 17" stroke="#1c1c28" strokeWidth="2"/>
              <path d="M2 12L12 17L22 12" stroke="#1c1c28" strokeWidth="2"/>
            </svg>
            <span className="sr-only">Ramp</span>
          </div>

          <div className="px-2 flex-1">
            <NavItem icon={<Search className="w-4 h-4" />} label="Search" shortcut="⌘K" />
            <NavItem icon={<InboxIcon />} label="Inbox" badge={7} />
            <NavItem icon={<InsightsIcon />} label="Insights" />

            <div className="mt-4 mb-1">
              <NavItem icon={<HomeIcon />} label="My Ramp" expandable>
                <SubNavItem label="Overview" />
                <SubNavItem label="Expenses" />
                <SubNavItem label="Travel" active />
              </NavItem>
            </div>

            <NavItem icon={<ExpensesIcon />} label="Expenses" />
            <NavItem icon={<SpendIcon />} label="Spend programs" />
            <NavItem icon={<ProcurementIcon />} label="Procurement" />
            <NavItem icon={<BillPayIcon />} label="Bill Pay" />
            <NavItem icon={<AccountingIcon />} label="Accounting" badge={37} />
            <NavItem icon={<PeopleIcon />} label="People" />
            <NavItem icon={<VendorsIcon />} label="Vendors" />
          </div>

          {/* Settings at bottom */}
          <div className="px-2 pb-4 mt-auto">
            <NavItem icon={<Settings className="w-4 h-4" />} label="Settings" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative">
          {/* Header Image - World map pattern */}
          <div className="h-[180px] bg-gradient-to-b from-[#e8e8e8] to-[#f0f0f0] relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#999"/>
                </pattern>
              </defs>
              <rect width="800" height="200" fill="url(#dots)"/>
              <path d="M100,100 Q200,50 300,100 T500,100 T700,100" fill="none" stroke="#aaa" strokeWidth="0.5"/>
              <path d="M150,120 Q250,70 350,120 T550,120 T750,120" fill="none" stroke="#aaa" strokeWidth="0.5"/>
            </svg>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] mx-8 -mt-24 relative z-10 p-6">
            {/* Tabs */}
            <div className="flex items-center gap-6 mb-6">
              <button
                onClick={() => setActiveTab("flights")}
                className={`text-2xl font-medium pb-1 transition-colors ${
                  activeTab === "flights"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Flights
              </button>
              <button
                onClick={() => setActiveTab("hotels")}
                className={`text-2xl font-medium pb-1 transition-colors ${
                  activeTab === "hotels"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Hotels
              </button>
            </div>

            {/* Search Form - Hotels only with pre-filled data */}
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value="New York, NY"
                  readOnly
                  className="w-full pl-10 pr-3 py-3.5 border border-[#e5e5e5] rounded-lg text-sm focus:outline-none focus:border-gray-400 bg-white"
                />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  value="Mar 10"
                  readOnly
                  className="w-[160px] pl-3 pr-10 py-3.5 border border-[#e5e5e5] rounded-lg text-sm focus:outline-none focus:border-gray-400 bg-white"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  value="Mar 14"
                  readOnly
                  className="w-[160px] pl-3 pr-10 py-3.5 border border-[#e5e5e5] rounded-lg text-sm focus:outline-none focus:border-gray-400 bg-white"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowSearchResults(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#D4E94B] text-black text-sm font-medium rounded-lg hover:bg-[#c5da3c] transition-colors"
              >
                <Search className="w-4 h-4" />
                Search hotels
              </button>
            </div>
          </div>

          {/* Action Items */}
          <div className="mx-8 mt-6 space-y-3">
            <ActionItem
              icon={<PolicyIcon />}
              label="Review your company's travel policy"
              onClick={() => setShowPolicySidebar(true)}
            />
            <ActionItem
              icon={<ProfileIcon />}
              label="Update your traveler profile for faster booking"
            />
            <ActionItem
              icon={<HelpIcon />}
              label="Learn more about booking travel on Ramp"
              external
            />
          </div>
        </div>

        {/* Policy Sidebar */}
        {showPolicySidebar && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setShowPolicySidebar(false)}
            />

            {/* Sidebar */}
            <div className="fixed right-0 top-0 bottom-0 w-[360px] bg-white border-l border-[#e5e5e5] z-50 shadow-xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div />
                  <button
                    onClick={() => setShowPolicySidebar(false)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Flights Section */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Flights</h4>
                  <div className="space-y-1">
                    {flightRules.map((rule, index) => (
                      <PolicyRuleItem
                        key={index}
                        icon={rule.icon}
                        title={rule.title}
                        subtitle={rule.subtitle}
                        expanded={expandedPolicy === `flight-${index}`}
                        onToggle={() =>
                          setExpandedPolicy(
                            expandedPolicy === `flight-${index}` ? null : `flight-${index}`
                          )
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Hotels Section */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Hotels</h4>
                  <div className="space-y-1">
                    {hotelRules.map((rule, index) => (
                      <PolicyRuleItem
                        key={index}
                        icon={rule.icon}
                        title={rule.title}
                        subtitle={rule.subtitle}
                        expanded={expandedPolicy === `hotel-${index}`}
                        onToggle={() =>
                          setExpandedPolicy(
                            expandedPolicy === `hotel-${index}` ? null : `hotel-${index}`
                          )
                        }
                        highlight={rule.title === "Prepaid Hotels Only"}
                      />
                    ))}
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-[#f7f7f7] rounded-lg p-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    If your card has enough funds, you can proceed with out-of-policy bookings. However,
                    your manager will be notified, and you'll need to provide a reason. To avoid this, look out
                    for "out of policy" tags when booking.
                  </p>
                  <a href="#" className="text-gray-900 underline hover:no-underline mt-3 inline-block">
                    Learn more about booking travel on Ramp
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Navigation Item Component
function NavItem({
  icon,
  label,
  active = false,
  expandable = false,
  badge,
  shortcut,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  expandable?: boolean;
  badge?: number;
  shortcut?: string;
  children?: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = React.useState(expandable);

  return (
    <div>
      <div
        onClick={() => expandable && setIsExpanded(!isExpanded)}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
          active ? "bg-[#f0f0f0] text-gray-900 font-medium" : "text-gray-600 hover:bg-[#f0f0f0]"
        }`}
      >
        <span className="text-gray-500">{icon}</span>
        <span className="flex-1">{label}</span>
        {badge && (
          <span className="bg-[#D4E94B] text-black text-xs font-medium px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
        {shortcut && (
          <span className="text-xs text-gray-400">{shortcut}</span>
        )}
        {expandable && (
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        )}
      </div>
      {expandable && isExpanded && (
        <div className="ml-4 mt-1">{children}</div>
      )}
    </div>
  );
}

function SubNavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className={`px-3 py-2 text-sm cursor-pointer rounded-lg transition-colors ${
      active ? "text-gray-900 font-medium bg-[#f0f0f0]" : "text-gray-500 hover:text-gray-700 hover:bg-[#f5f5f5]"
    }`}>
      {label}
    </div>
  );
}

function ActionItem({
  icon,
  label,
  onClick,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  external?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-5 py-4 bg-white border border-[#e5e5e5] rounded-xl hover:bg-[#fafafa] transition-colors shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span className="text-gray-400">{icon}</span>
        <span className="text-sm text-gray-800">{label}</span>
      </div>
      {external ? (
        <span className="text-gray-400">↗</span>
      ) : (
        <ChevronRight className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );
}

function PolicyRuleItem({
  icon,
  title,
  subtitle,
  expanded = false,
  onToggle,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  expanded?: boolean;
  onToggle?: () => void;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer transition-colors ${
        highlight ? "bg-[#D4E94B]/10" : "hover:bg-[#f7f7f7]"
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-3">
        <span className={`${highlight ? "text-[#7a8a15]" : "text-gray-400"}`}>{icon}</span>
        <div>
          <p className={`text-sm ${highlight ? "font-medium text-gray-900" : "text-gray-700"}`}>
            {title}
          </p>
          {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {expanded ? (
        <ChevronUp className="w-4 h-4 text-gray-400" />
      ) : (
        <ChevronDown className="w-4 h-4 text-gray-400" />
      )}
    </div>
  );
}

// Icon Components matching Ramp style
function InboxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="12" height="12" rx="2"/>
      <path d="M2 10h4l1 2h2l1-2h4"/>
    </svg>
  );
}

function InsightsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12V8M8 12V4M12 12V6"/>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="10" height="10" rx="1"/>
    </svg>
  );
}

function ExpensesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="6"/>
      <path d="M8 5v6M6 7h4"/>
    </svg>
  );
}

function SpendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="12" height="8" rx="1"/>
      <path d="M2 7h12"/>
    </svg>
  );
}

function ProcurementIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="10" height="10" rx="1"/>
      <path d="M6 6h4M6 8h4M6 10h2"/>
    </svg>
  );
}

function BillPayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="2" width="10" height="12" rx="1"/>
      <path d="M6 5h4M6 8h4M6 11h2"/>
    </svg>
  );
}

function AccountingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="12" height="10" rx="1"/>
      <path d="M2 6h12M6 6v7"/>
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="5" r="2.5"/>
      <path d="M3 14c0-2.5 2.5-4 5-4s5 1.5 5 4"/>
    </svg>
  );
}

function VendorsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="12" height="9" rx="1"/>
      <path d="M2 7h12M5 4V2M11 4V2"/>
    </svg>
  );
}

function PolicyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10" cy="10" r="7"/>
      <path d="M10 6v4l2 2"/>
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10" cy="7" r="3"/>
      <path d="M4 17c0-3 3-5 6-5s6 2 6 5"/>
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10" cy="10" r="7"/>
      <path d="M8 8c0-1.5 1-2 2-2s2 .5 2 2c0 1-1 1.5-2 2v1"/>
      <circle cx="10" cy="14" r="0.5" fill="currentColor"/>
    </svg>
  );
}
