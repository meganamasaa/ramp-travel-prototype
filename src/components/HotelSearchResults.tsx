import * as React from "react";
import {
  X,
  ChevronDown,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Hotel {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: string;
  location: string;
  pricePerNight: number;
  starRating: number;
  paymentOptions: ("prepaid" | "pay-later")[];
  coordinates: { x: number; y: number };
  hasEarnReward?: boolean;
  requestToBook?: boolean;
  incidentalHold?: number;
}

interface HotelSearchResultsProps {
  paymentSetting: string;
  onClose: () => void;
}

const sampleHotels: Hotel[] = [
  {
    id: "1",
    name: "The Broadway Beacon",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
    rating: 8.6,
    reviews: "2.8k reviews",
    location: "Downtown New York City",
    pricePerNight: 200,
    starRating: 4,
    paymentOptions: ["prepaid", "pay-later"],
    coordinates: { x: 35, y: 32 },
    incidentalHold: 85,
  },
  {
    id: "2",
    name: "The Empire",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop",
    rating: 8.8,
    reviews: "2.4k reviews",
    location: "Downtown New York City",
    pricePerNight: 120,
    starRating: 3,
    paymentOptions: ["prepaid"],
    coordinates: { x: 45, y: 52 },
    hasEarnReward: true,
    incidentalHold: 50,
  },
  {
    id: "3",
    name: "Central Park Palace",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
    rating: 9.1,
    reviews: "1.7k reviews",
    location: "Downtown New York City",
    pricePerNight: 500,
    starRating: 5,
    paymentOptions: ["pay-later"],
    coordinates: { x: 78, y: 55 },
    requestToBook: true,
    incidentalHold: 150,
  },
  {
    id: "4",
    name: "Tribeca Hotel",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop",
    rating: 8.4,
    reviews: "1.2k reviews",
    location: "Downtown New York City",
    pricePerNight: 300,
    starRating: 4,
    paymentOptions: ["prepaid"],
    coordinates: { x: 25, y: 78 },
    incidentalHold: 100,
  },
  {
    id: "5",
    name: "SoHo Grand Hotel",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=300&h=200&fit=crop",
    rating: 8.9,
    reviews: "3.1k reviews",
    location: "SoHo, New York City",
    pricePerNight: 350,
    starRating: 4,
    paymentOptions: ["prepaid", "pay-later"],
    coordinates: { x: 55, y: 22 },
    incidentalHold: 100,
  },
  {
    id: "6",
    name: "Chelsea Inn",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop",
    rating: 8.2,
    reviews: "1.9k reviews",
    location: "Chelsea, New York City",
    pricePerNight: 220,
    starRating: 3,
    paymentOptions: ["prepaid"],
    coordinates: { x: 30, y: 45 },
    incidentalHold: 50,
  },
  {
    id: "7",
    name: "Flatiron Suites",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop",
    rating: 8.7,
    reviews: "2.1k reviews",
    location: "Flatiron, New York City",
    pricePerNight: 430,
    starRating: 4,
    paymentOptions: ["prepaid"],
    coordinates: { x: 38, y: 48 },
    incidentalHold: 100,
  },
  {
    id: "8",
    name: "Union Square Hotel",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=300&h=200&fit=crop",
    rating: 8.5,
    reviews: "2.5k reviews",
    location: "Union Square, NYC",
    pricePerNight: 400,
    starRating: 4,
    paymentOptions: ["prepaid"],
    coordinates: { x: 62, y: 68 },
    incidentalHold: 85,
  },
  {
    id: "9",
    name: "NoMad Hotel",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=300&h=200&fit=crop",
    rating: 9.0,
    reviews: "1.8k reviews",
    location: "NoMad, New York City",
    pricePerNight: 520,
    starRating: 5,
    paymentOptions: ["pay-later"],
    coordinates: { x: 72, y: 35 },
    incidentalHold: 150,
  },
  {
    id: "10",
    name: "Greenwich Village B&B",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&h=200&fit=crop",
    rating: 8.3,
    reviews: "980 reviews",
    location: "Greenwich Village, NYC",
    pricePerNight: 320,
    starRating: 3,
    paymentOptions: ["prepaid"],
    coordinates: { x: 22, y: 72 },
    incidentalHold: 50,
  },
  {
    id: "11",
    name: "Korea Town Stay",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=300&h=200&fit=crop",
    rating: 8.1,
    reviews: "1.5k reviews",
    location: "Korea Town, NYC",
    pricePerNight: 120,
    starRating: 3,
    paymentOptions: ["prepaid"],
    coordinates: { x: 18, y: 18 },
    incidentalHold: 50,
  },
  {
    id: "12",
    name: "West Side Luxury",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=200&fit=crop",
    rating: 9.2,
    reviews: "890 reviews",
    location: "West Side, NYC",
    pricePerNight: 600,
    starRating: 5,
    paymentOptions: ["pay-later"],
    coordinates: { x: 15, y: 85 },
    incidentalHold: 175,
  },
  {
    id: "13",
    name: "Midtown Express",
    image: "https://images.unsplash.com/photo-1587213811864-46e59f6873b1?w=300&h=200&fit=crop",
    rating: 7.9,
    reviews: "3.2k reviews",
    location: "Midtown, NYC",
    pricePerNight: 200,
    starRating: 3,
    paymentOptions: ["prepaid"],
    coordinates: { x: 70, y: 80 },
    incidentalHold: 50,
  },
  {
    id: "14",
    name: "Park Avenue Inn",
    image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=300&h=200&fit=crop",
    rating: 8.6,
    reviews: "1.4k reviews",
    location: "Park Avenue, NYC",
    pricePerNight: 300,
    starRating: 4,
    paymentOptions: ["prepaid"],
    coordinates: { x: 82, y: 75 },
    incidentalHold: 75,
  },
];

export function HotelSearchResults({ paymentSetting, onClose }: HotelSearchResultsProps) {
  const [selectedPaymentFilter, setSelectedPaymentFilter] = React.useState<string>(
    paymentSetting === "prepaid-only" ? "prepaid" : "all"
  );
  const [showPaymentDropdown, setShowPaymentDropdown] = React.useState(false);

  const filteredHotels = React.useMemo(() => {
    if (paymentSetting === "prepaid-only") {
      return sampleHotels.filter((hotel) => hotel.paymentOptions.includes("prepaid"));
    }
    if (selectedPaymentFilter === "all") {
      return sampleHotels;
    } else if (selectedPaymentFilter === "prepaid") {
      return sampleHotels.filter((hotel) => hotel.paymentOptions.includes("prepaid"));
    } else if (selectedPaymentFilter === "pay-later") {
      return sampleHotels.filter((hotel) => hotel.paymentOptions.includes("pay-later"));
    }
    return sampleHotels;
  }, [paymentSetting, selectedPaymentFilter]);

  const getPaymentFilterOptions = () => {
    if (paymentSetting === "prepaid-only") {
      return [{ value: "prepaid", label: "Prepaid" }];
    }
    return [
      { value: "all", label: "All Payment Types" },
      { value: "prepaid", label: "Prepaid Only" },
      { value: "pay-later", label: "Pay Later Only" },
    ];
  };

  return (
    <div className="fixed inset-0 bg-white z-[200] flex flex-col font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
      {/* Header */}
      <div className="border-b border-[#e5e5e5] px-5 py-3 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <span className="text-gray-400 text-sm">✏️</span>
          <h1 className="text-[15px] font-semibold text-gray-900">Megan's Trip to New York</h1>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="border-b border-[#e5e5e5] px-5 py-2.5 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 bg-[#f5f5f5] rounded-full text-[13px] text-gray-700">
            Megan
          </div>
          <div className="px-3 py-1.5 bg-[#f5f5f5] rounded-full text-[13px] text-gray-700">
            New York
          </div>
          <div className="px-3 py-1.5 bg-[#f5f5f5] rounded-full text-[13px] text-gray-700">
            Mar 10 — 14
          </div>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full">
            <span className="text-gray-400 text-sm">📅</span>
          </button>
        </div>
        <div className="flex items-center gap-1.5 text-[13px]">
          <span className="text-gray-400">Powered by</span>
          <span className="text-[#003087] font-bold">priceline</span>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-[#e5e5e5] px-5 py-2.5 flex items-center gap-2 bg-white">
        <FilterButton icon="☰" label="Sort" />
        <FilterButton icon="◎" label="Policy" />
        <FilterButton icon="☆" label="Stars" />
        <FilterButton icon="$" label="Price" />
        <FilterButton icon="↩" label="Refundable" />
        <FilterButton icon="🎁" label="Rewards" />

        {/* Payment Filter */}
        <div className="relative">
          <button
            onClick={() => paymentSetting === "flex" && setShowPaymentDropdown(!showPaymentDropdown)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] border transition-colors ${
              paymentSetting === "prepaid-only"
                ? "bg-[#D4E94B] border-[#D4E94B] text-gray-900 font-medium"
                : "border-[#e0e0e0] hover:bg-gray-50 text-gray-700"
            }`}
          >
            <span>💳</span>
            <span>
              {paymentSetting === "prepaid-only"
                ? "Prepaid"
                : selectedPaymentFilter === "all"
                ? "Payment"
                : selectedPaymentFilter === "prepaid"
                ? "Prepaid"
                : "Pay Later"}
            </span>
            {paymentSetting === "flex" && <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
          </button>

          {showPaymentDropdown && paymentSetting === "flex" && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px] py-1">
              {getPaymentFilterOptions().map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedPaymentFilter(option.value);
                    setShowPaymentDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-[13px] hover:bg-gray-50 ${
                    selectedPaymentFilter === option.value ? "bg-gray-50 font-medium" : ""
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Policy Info Bar */}
      <div className="px-5 py-2.5 bg-white border-b border-[#e5e5e5] flex items-center gap-2 text-[13px]">
        <span className="text-gray-400">◎</span>
        <span className="text-gray-600">
          The average price is around <span className="font-semibold text-gray-900">$400/night</span>.
          You can book hotels up to <span className="font-semibold text-gray-900">$480/night</span>.
        </span>
        <span className="ml-auto text-gray-400">→</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Hotel List */}
        <div className="w-[480px] overflow-y-auto bg-white">
          {filteredHotels.slice(0, 5).map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              showPaymentLabel={paymentSetting === "flex"}
            />
          ))}
        </div>

        {/* Map */}
        <div className="flex-1 relative overflow-hidden bg-[#f0ede8]">
          {/* Base map layer */}
          <div className="absolute inset-0">
            {/* Building blocks pattern */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="blocks" x="0" y="0" width="100" height="80" patternUnits="userSpaceOnUse">
                  <rect x="5" y="5" width="40" height="30" fill="#e8e4de" rx="2"/>
                  <rect x="55" y="5" width="40" height="30" fill="#e8e4de" rx="2"/>
                  <rect x="5" y="45" width="40" height="30" fill="#e8e4de" rx="2"/>
                  <rect x="55" y="45" width="40" height="30" fill="#e8e4de" rx="2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blocks)"/>
            </svg>

            {/* Main streets - horizontal */}
            <div className="absolute h-[3px] bg-white/90" style={{ top: '20%', left: '0', right: '0' }} />
            <div className="absolute h-[3px] bg-white/90" style={{ top: '35%', left: '0', right: '0' }} />
            <div className="absolute h-[3px] bg-white/90" style={{ top: '50%', left: '0', right: '0' }} />
            <div className="absolute h-[3px] bg-white/90" style={{ top: '65%', left: '0', right: '0' }} />
            <div className="absolute h-[3px] bg-white/90" style={{ top: '80%', left: '0', right: '0' }} />

            {/* Main streets - vertical */}
            <div className="absolute w-[3px] bg-white/90" style={{ left: '20%', top: '0', bottom: '0' }} />
            <div className="absolute w-[3px] bg-white/90" style={{ left: '40%', top: '0', bottom: '0' }} />
            <div className="absolute w-[3px] bg-white/90" style={{ left: '60%', top: '0', bottom: '0' }} />
            <div className="absolute w-[3px] bg-white/90" style={{ left: '80%', top: '0', bottom: '0' }} />

            {/* Broadway diagonal */}
            <div className="absolute bg-[#fffef8] shadow-sm" style={{
              width: '4px',
              height: '120%',
              left: '55%',
              top: '-10%',
              transform: 'rotate(-20deg)',
              transformOrigin: 'top left'
            }} />

            {/* Parks - green areas */}
            <div className="absolute rounded-lg shadow-inner" style={{
              top: '8%',
              right: '8%',
              width: '80px',
              height: '55px',
              background: 'linear-gradient(135deg, #b8d4a0 0%, #9cc585 100%)'
            }}>
              <div className="absolute inset-1 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle, #6ba354 1px, transparent 1px)',
                backgroundSize: '8px 8px'
              }} />
            </div>
            <div className="absolute rounded-lg shadow-inner" style={{
              bottom: '18%',
              left: '18%',
              width: '65px',
              height: '50px',
              background: 'linear-gradient(135deg, #b8d4a0 0%, #9cc585 100%)'
            }}>
              <div className="absolute inset-1 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle, #6ba354 1px, transparent 1px)',
                backgroundSize: '8px 8px'
              }} />
            </div>

            {/* Union Square park */}
            <div className="absolute rounded-lg shadow-inner" style={{
              bottom: '25%',
              right: '25%',
              width: '50px',
              height: '40px',
              background: 'linear-gradient(135deg, #b8d4a0 0%, #9cc585 100%)'
            }}>
              <div className="absolute inset-1 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle, #6ba354 1px, transparent 1px)',
                backgroundSize: '6px 6px'
              }} />
            </div>

            {/* Neighborhood Labels */}
            <div className="absolute text-[10px] font-semibold text-[#8b8680] tracking-[0.15em] uppercase" style={{ top: '10%', right: '20%' }}>Chelsea</div>
            <div className="absolute text-[9px] text-[#a09a94] tracking-[0.12em] uppercase" style={{ top: '6%', left: '12%' }}>Koreatown</div>
            <div className="absolute text-[10px] font-semibold text-[#8b8680] tracking-[0.15em] uppercase" style={{ top: '28%', right: '12%' }}>NoMad</div>
            <div className="absolute text-[10px] font-semibold text-[#8b8680] tracking-[0.15em] uppercase" style={{ top: '45%', right: '8%' }}>Flatiron</div>
            <div className="absolute text-[10px] font-semibold text-[#8b8680] tracking-[0.15em] uppercase" style={{ bottom: '28%', left: '6%' }}>West Village</div>
            <div className="absolute text-[10px] font-semibold text-[#8b8680] tracking-[0.15em] uppercase" style={{ bottom: '15%', right: '20%' }}>Union Sq</div>
            <div className="absolute text-[10px] font-semibold text-[#8b8680] tracking-[0.15em] uppercase" style={{ top: '62%', left: '35%' }}>Gramercy</div>

            {/* Street Labels */}
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium" style={{ top: '18%', right: '3%' }}>W 26th St</div>
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium" style={{ top: '33%', right: '3%' }}>W 23rd St</div>
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium" style={{ top: '48%', right: '3%' }}>W 20th St</div>
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium" style={{ top: '63%', right: '3%' }}>W 17th St</div>
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium" style={{ top: '78%', right: '3%' }}>W 14th St</div>

            {/* Avenue Labels */}
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium" style={{ bottom: '3%', left: '18%' }}>8th Ave</div>
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium" style={{ bottom: '3%', left: '38%' }}>7th Ave</div>
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium" style={{ bottom: '3%', left: '58%' }}>6th Ave</div>
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium" style={{ bottom: '3%', left: '78%' }}>5th Ave</div>
            <div className="absolute text-[8px] text-[#b5b0a8] font-medium italic" style={{ bottom: '8%', right: '5%', transform: 'rotate(-20deg)' }}>Broadway</div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-3 right-3 flex items-center gap-0.5 z-10">
            <button className="w-7 h-7 bg-white rounded-l border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-500 text-sm">
              −
            </button>
            <button className="w-7 h-7 bg-white rounded-r border border-l-0 border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-500 text-sm">
              +
            </button>
          </div>

          {/* Price Markers */}
          {filteredHotels.map((hotel) => (
            <PriceMarker
              key={hotel.id}
              hotel={hotel}
              style={{
                left: `${hotel.coordinates.x}%`,
                top: `${hotel.coordinates.y}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] border border-[#e0e0e0] hover:bg-gray-50 transition-colors text-gray-700">
      <span className="text-gray-400">{icon}</span>
      <span>{label}</span>
      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
    </button>
  );
}

function PriceMarker({ hotel, style }: { hotel: Hotel; style: React.CSSProperties }) {
  const isPrepaid = hotel.paymentOptions.includes("prepaid");

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
      style={style}
    >
      <div className="bg-white pl-1.5 pr-2 py-1 rounded-md shadow-md text-[13px] font-medium flex items-center gap-1 hover:shadow-lg cursor-pointer transition-shadow">
        {isPrepaid ? (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="#1a8917" strokeWidth="2" fill="none"/>
            <path d="M5 8l2 2 4-4" stroke="#1a8917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="#c45c3e" strokeWidth="2" fill="none"/>
            <path d="M6 6l4 4M10 6l-4 4" stroke="#c45c3e" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
        <span className={isPrepaid ? "text-[#1a8917]" : "text-gray-700"}>
          ${hotel.pricePerNight}
        </span>
      </div>
    </div>
  );
}

function HotelCard({ hotel, showPaymentLabel }: { hotel: Hotel; showPaymentLabel: boolean }) {
  const isPrepaid = hotel.paymentOptions.includes("prepaid");
  const hasBothOptions = hotel.paymentOptions.length === 2;

  return (
    <div className="p-4 border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer transition-colors">
      <div className="flex gap-4">
        {/* Hotel Image */}
        <div className="relative w-[180px] h-[120px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          {/* Image dots indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          </div>
        </div>

        {/* Hotel Info */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-semibold text-[15px] text-gray-900 leading-tight">{hotel.name}</h3>
              <p className="text-[12px] text-gray-500 mt-0.5">
                {hotel.starRating}-star hotel · {hotel.location}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="flex items-center gap-1">
                {isPrepaid ? (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#1a8917" strokeWidth="2" fill="none"/>
                    <path d="M5 8l2 2 4-4" stroke="#1a8917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#c45c3e" strokeWidth="2" fill="none"/>
                    <path d="M6 6l4 4M10 6l-4 4" stroke="#c45c3e" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
                <span className={`text-[17px] font-semibold ${isPrepaid ? 'text-[#1a8917]' : 'text-gray-700'}`}>
                  ${hotel.pricePerNight}
                </span>
                <span className="text-[12px] text-gray-400">/night</span>
              </div>
              {hotel.incidentalHold && (
                <div className="text-[11px] text-gray-400 mt-0.5 text-right">
                  {isPrepaid
                    ? `~$${hotel.incidentalHold}/night incidental hold`
                    : `~$${hotel.incidentalHold}/night incidentals at checkout`}
                </div>
              )}
            </div>
          </div>

          {/* Payment label for flex mode */}
          {showPaymentLabel && hasBothOptions && (
            <div className="flex items-center gap-1 mt-1.5 text-[11px] text-gray-500">
              <span>⚡</span>
              <span>Pay Later Available</span>
            </div>
          )}

          {/* Rating and Action */}
          <div className="flex items-center justify-between mt-auto pt-2">
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-0.5 text-[12px] text-gray-600">
                <Star className="w-3.5 h-3.5 fill-gray-600 text-gray-600" />
                {hotel.rating}
              </span>
              <span className="text-[12px] text-gray-400">·</span>
              <span className="text-[12px] text-gray-500">{hotel.reviews}</span>
            </div>

            {hotel.hasEarnReward ? (
              <button className="flex items-center gap-1 px-3 py-1.5 bg-[#1a8917] text-white text-[12px] font-medium rounded">
                <span>🎁</span>
                Earn $20
              </button>
            ) : hotel.requestToBook ? (
              <button className="px-3 py-1.5 border border-gray-300 rounded text-[12px] font-medium text-gray-700 hover:bg-gray-50">
                Request to book
              </button>
            ) : (
              <button className="px-3 py-1.5 border border-gray-300 rounded text-[12px] font-medium text-gray-700 hover:bg-gray-50">
                Book a room
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
