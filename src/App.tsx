import * as React from "react";
import { AdminHotelsPanel } from "./components/AdminHotelsPanel";
import { EmployeeTravelView } from "./components/EmployeeTravelView";
import "./index.css";

type ViewMode = "admin" | "employee";

interface HotelSettings {
  marketRateEnabled: boolean;
  marketRateValue: number;
  maxPriceEnabled: boolean;
  maxPriceValue: string;
  bookingLeadTime: string;
  refundableFares: string;
  payment: string;
  perDiemValue: string;
}

const defaultSettings: HotelSettings = {
  marketRateEnabled: true,
  marketRateValue: 15,
  maxPriceEnabled: true,
  maxPriceValue: "400",
  bookingLeadTime: "1-week",
  refundableFares: "refundable-only",
  payment: "prepaid-only",
  perDiemValue: "100",
};

export function App() {
  const [viewMode, setViewMode] = React.useState<ViewMode>("admin");
  const [settings, setSettings] = React.useState<HotelSettings>(defaultSettings);
  const [savedSettings, setSavedSettings] = React.useState<HotelSettings>(defaultSettings);
  const [showSaveNotification, setShowSaveNotification] = React.useState(false);

  const handleSave = () => {
    setSavedSettings(settings);
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 3000);
  };

  const handleCancel = () => {
    setSettings(savedSettings);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* View Mode Toggle */}
      <div className="fixed top-16 right-4 z-[100] flex items-center gap-2 bg-white rounded-full shadow-lg p-1 border border-gray-200">
        <button
          onClick={() => setViewMode("admin")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            viewMode === "admin"
              ? "bg-[#1a1a2e] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Admin View
        </button>
        <button
          onClick={() => setViewMode("employee")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            viewMode === "employee"
              ? "bg-[#1a1a2e] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Employee View
        </button>
      </div>

      {/* Save Notification */}
      {showSaveNotification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Settings saved successfully!</span>
        </div>
      )}

      {/* Admin View */}
      {viewMode === "admin" && (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
          <AdminHotelsPanel
            settings={settings}
            onSettingsChange={setSettings}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </div>
      )}

      {/* Employee View */}
      {viewMode === "employee" && (
        <EmployeeTravelView
          settings={settings}
          onPolicyClick={() => {}}
        />
      )}
    </div>
  );
}

export default App;
