import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Calendar,
  MapPin,
  QrCode,
  Car,
  ChevronRight,
  Info,
  Wifi,
  Phone,
  Users,
  Building,
  Clock,
  AlertTriangle
} from "lucide-react";
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const events = [
    {
      id: 1,
      title: "Campus Tour (Sprint 1 Demo)",
      time: "9:00 AM - 12:00 PM",
      location: "Various Locations",
      description: "Guided tour of the university campus",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Engineering Lab Demo",
      time: "11:00 AM - 12:00 PM",
      location: "Engineering Building",
      description: "Interactive demonstrations in our state-of-the-art labs",
      status: "active",
    }
  ];

  const quickStats = [
    { label: "Events Today", value: "12", icon: Calendar },
    { label: "Campus Buildings", value: "8", icon: Building },
    { label: "Parking Spots", value: "150", icon: Car },
    { label: "Tour Groups", value: "6", icon: Users },
  ];

  const renderHome = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-amber-700 text-white">
        <div className="relative px-6 py-12 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white/20 p-4">
                <img src="/extracted_logo.png" alt="University Logo" className="h-16 w-16 object-contain" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Open Day Prototype
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-amber-100">
              University of Wolverhampton - Sprint 1 Build
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="rounded-lg bg-white/10 px-4 py-3">
                  <div className="flex items-center gap-2 text-left">
                    <stat.icon className="h-5 w-5" />
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-amber-100">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-800">
            <AlertTriangle className="h-5 w-5" />
            <p className="text-sm font-medium">Sprint 1 Assessment: This is a working prototype demonstrating core navigation and layout.</p>
          </div>

          <h2 className="mb-6 text-2xl font-bold text-gray-900">Module Sprint 1 Features</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card 
              className="cursor-pointer border-2 border-amber-500 bg-white transition-all hover:shadow-md"
              onClick={() => setActiveTab("schedule")}
            >
              <CardContent className="p-6 text-center">
                <Calendar className="mx-auto mb-4 h-12 w-12 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900">Schedule</h3>
                <p className="mt-2 text-sm text-gray-500">View Prototype Events</p>
                <ChevronRight className="mx-auto mt-3 h-5 w-5 text-amber-600" />
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer border-2 border-gray-200 bg-gray-50 opacity-75"
              onClick={() => setActiveTab("map")}
            >
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-400">Campus Map</h3>
                <p className="mt-2 text-sm text-gray-400">Sprint 2 Planned</p>
                <Badge variant="outline" className="mt-3">WIP</Badge>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer border-2 border-gray-200 bg-gray-50 opacity-75"
              onClick={() => setActiveTab("scanner")}
            >
              <CardContent className="p-6 text-center">
                <QrCode className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-400">QR Scanner</h3>
                <p className="mt-2 text-sm text-gray-400">Sprint 2 Planned</p>
                <Badge variant="outline" className="mt-3">WIP</Badge>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer border-2 border-gray-200 bg-gray-50 opacity-75"
              onClick={() => setActiveTab("info")}
            >
              <CardContent className="p-6 text-center">
                <Car className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-400">Parking Info</h3>
                <p className="mt-2 text-sm text-gray-400">Sprint 2 Planned</p>
                <Badge variant="outline" className="mt-3">WIP</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Info className="h-6 w-6 text-amber-600" />
                  Sprint 1 Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 rounded-lg bg-gray-100 p-3">
                  <Wifi className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Network Integration</p>
                    <p className="text-sm text-gray-600 text-amber-700">Pending backend setup</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-gray-100 p-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Contact System</p>
                    <p className="text-sm text-gray-600 text-amber-700">Sprint 2 Task</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => setActiveTab("home")}
          className="mb-8"
        >
          ← Back to Prototype Home
        </Button>
        <h2 className="mb-8 text-3xl font-bold">Sprint 1 Event Schedule</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600">{event.description}</p>
                  </div>
                  <Badge variant={event.status === "active" ? "default" : "secondary"}>
                    {event.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWIP = (title) => (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <div className="rounded-full bg-amber-100 p-8">
        <AlertTriangle className="h-16 w-16 text-amber-600" />
      </div>
      <h2 className="mt-6 text-3xl font-bold text-gray-900">{title}</h2>
      <p className="mt-4 max-w-md text-lg text-gray-600">
        This feature is part of the future development roadmap and is scheduled for implementation in **Sprint 2**.
      </p>
      <Button 
        className="mt-8 bg-amber-700 hover:bg-amber-800"
        onClick={() => setActiveTab("home")}
      >
        Return to Sprint 1 Dashboard
      </Button>
    </div>
  );

  return (
    <div className="font-sans">
      {activeTab === "home" && renderHome()}
      {activeTab === "schedule" && renderSchedule()}
      {activeTab === "map" && renderWIP("Campus Map (Sprint 2)")}
      {activeTab === "scanner" && renderWIP("QR Scanner (Sprint 2)")}
      {activeTab === "info" && renderWIP("Parking Info (Sprint 2)")}
    </div>
  );
}

export default App;
