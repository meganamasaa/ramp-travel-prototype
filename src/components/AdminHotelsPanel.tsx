import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

interface AdminHotelsPanelProps {
  settings: {
    marketRateEnabled: boolean;
    marketRateValue: number;
    maxPriceEnabled: boolean;
    maxPriceValue: string;
    bookingLeadTime: string;
    refundableFares: string;
    payment: string;
    perDiemValue: string;
  };
  onSettingsChange: (settings: any) => void;
  onSave: () => void;
  onCancel: () => void;
}

export function AdminHotelsPanel({
  settings,
  onSettingsChange,
  onSave,
  onCancel,
}: AdminHotelsPanelProps) {
  const [paymentDropdownOpen, setPaymentDropdownOpen] = React.useState(false);

  const sliderMarkers = [
    { value: 0, label: "0%" },
    { value: 5, label: "5%" },
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
    { value: 25, label: "25%" },
    { value: 30, label: "30%" },
  ];

  const updateSetting = (key: string, value: any) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md border border-gray-200 flex flex-col h-full max-h-[90vh]">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900">Hotels</h2>
        <p className="text-sm text-gray-500 mt-1">
          Set rules to determine when hotels are in policy and when they are out of policy. When several policy rules apply, hotels are in policy only if they meet every rule.
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Market Rate Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Market rate</span>
            <Switch
              checked={settings.marketRateEnabled}
              onCheckedChange={(checked) => updateSetting("marketRateEnabled", checked)}
            />
          </div>

          <p className="text-xs text-gray-500">
            Hotels adhere to policy when their booking price is no more than 15% above the market rate for similar hotels on Ramp.
          </p>

          {settings.marketRateEnabled && (
            <div className="pt-2">
              <Slider
                value={settings.marketRateValue}
                min={0}
                max={30}
                step={5}
                onChange={(value) => updateSetting("marketRateValue", value)}
                markers={sliderMarkers}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-6">
                <span>Cost-saving</span>
                <span className="text-gray-600">Recommended</span>
                <span>Flexible</span>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-100" />

        {/* Maximum Price Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Maximum price</span>
            <Switch
              checked={settings.maxPriceEnabled}
              onCheckedChange={(checked) => updateSetting("maxPriceEnabled", checked)}
            />
          </div>

          <p className="text-xs text-gray-500">
            Hotels adhere to policy when their booking price, inclusive of taxes and fees, is no more than the maximum price.
          </p>

          {settings.maxPriceEnabled && (
            <div>
              <label className="text-xs text-gray-500 block mb-1">Maximum price</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  value={settings.maxPriceValue}
                  onChange={(e) => updateSetting("maxPriceValue", e.target.value)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#D4E94B]/50"
                />
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-100" />

        {/* Booking Lead Time */}
        <div>
          <label className="text-xs text-gray-500 block mb-1">Booking lead time</label>
          <Select
            value={settings.bookingLeadTime}
            onValueChange={(value) => updateSetting("bookingLeadTime", value)}
          >
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Select lead time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-week">1+ week in advance</SelectItem>
              <SelectItem value="2-weeks">2+ weeks in advance</SelectItem>
              <SelectItem value="1-month">1+ month in advance</SelectItem>
              <SelectItem value="no-restriction">No restriction</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Refundable Fares */}
        <div>
          <label className="text-xs text-gray-500 block mb-1">Refundable fares</label>
          <Select
            value={settings.refundableFares}
            onValueChange={(value) => updateSetting("refundableFares", value)}
          >
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Select refundable option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="refundable-only">Refundable hotels only</SelectItem>
              <SelectItem value="any">Any hotel type</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Payment - Key new feature */}
        <div className="relative">
          <label className="text-xs text-gray-500 block mb-1">Payment</label>
          <div className="relative">
            <button
              onClick={() => setPaymentDropdownOpen(!paymentDropdownOpen)}
              className="w-full flex items-center justify-between px-3 py-2 border border-gray-200 rounded-md text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#D4E94B]/50"
            >
              <span className="text-gray-900">
                {settings.payment === "flex" && "Flex – Prepaid, or pay on site"}
                {settings.payment === "prepaid-only" && "Prepaid only"}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {paymentDropdownOpen && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="py-1">
                  <button
                    onClick={() => {
                      updateSetting("payment", "flex");
                      setPaymentDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                      settings.payment === "flex" ? "bg-gray-50" : ""
                    }`}
                  >
                    Flex – Prepaid, or pay on site
                  </button>
                  <button
                    onClick={() => {
                      updateSetting("payment", "prepaid-only");
                      setPaymentDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 font-medium ${
                      settings.payment === "prepaid-only" ? "bg-gray-50" : ""
                    }`}
                  >
                    Prepaid only
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Per Diem Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Per diem</h3>
            <p className="text-xs text-gray-500 mt-1">
              Every card transaction from restaurants and bars above the daily limit will be flagged.
            </p>
          </div>

          <div>
            <label className="text-xs text-gray-500 block mb-1">Maximum daily spend</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={settings.perDiemValue}
                onChange={(e) => updateSetting("perDiemValue", e.target.value)}
                className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#D4E94B]/50"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Leave empty if you don't want to set a per diem policy.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-4 border-t border-gray-100 flex justify-between items-center bg-white">
        <button
          onClick={onCancel}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          className="px-4 py-2 bg-[#D4E94B] text-black text-sm font-medium rounded-md hover:bg-[#c5da3c] transition-colors"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
