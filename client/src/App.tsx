import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Watch from "@/pages/Watch";
import Discover from "@/pages/Discover";
import Live from "@/pages/Live";
import Upload from "@/pages/Upload";
import History from "@/pages/History";
import WatchLater from "@/pages/WatchLater";
import Liked from "@/pages/Liked";
import Favorites from "@/pages/Favorites";
import Downloads from "@/pages/Downloads";
import Playlist from "@/pages/Playlist";
import Profile from "@/pages/Profile";
import { useEffect } from "react";
import { useAppStore } from "@/stores/useAppStore";

// Scroll to top when route changes
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shorts" component={Discover} />
        <Route path="/subscriptions" component={Live} />
        <Route path="/upload" component={Upload} />
        <Route path="/watch/:id" component={Watch} />
        <Route path="/history" component={History} />
        <Route path="/watch-later" component={WatchLater} />
        <Route path="/liked" component={Liked} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/playlist/:id" component={Playlist} />
        <Route path="/profile" component={Profile} />
        {/* For demo, channel links redirect to home or 404 for now, can be added later */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const { theme } = useAppStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
