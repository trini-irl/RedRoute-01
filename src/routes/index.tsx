<<<<<<< HEAD
import { useEffect, useState, type FormEvent } from "react";
=======
import { useMemo, useState, type FormEvent } from "react";
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HeartHandshake,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
<<<<<<< HEAD
import { apiRequest } from "@/lib/api";
=======
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RedRoute — One connection. One donation. A chance at life." },
      {
        name: "description",
        content:
          "Finding a blood donor shouldn't be complicated. Meet RedRoute, a more thoughtful way to connect with donors in your community.",
      },
      {
        property: "og:title",
        content: "RedRoute — One connection. One donation. A chance at life.",
      },
      {
        property: "og:description",
        content:
          "Finding a blood donor shouldn't be complicated. Connect with donors in your community, one search at a time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RedRouteHome,
});

<<<<<<< HEAD
type BloodType = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

type Donor = {
  id: number;
  display_name: string;
  blood_group: BloodType;
  city: string;
  pin_code: string;
  availability: string;
  tint: string;
};

type AdminDonor = {
  id: number;
  display_name: string;
  blood_group: BloodType;
  city: string;
  pin_code: string;
  availability: string;
  status: "pending" | "active" | "rejected" | "inactive";
};

type AdminRequest = {
  id: number;
  donor_id: number;
  donor_name: string;
  blood_group: BloodType;
  city: string;
  requester_name: string;
  message: string;
  status: "pending" | "contacted" | "fulfilled" | "closed";
};

const bloodTypes: BloodType[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
=======
type BloodType = "A+" | "A−" | "B+" | "B−" | "AB+" | "AB−" | "O+" | "O−";

type ExampleDonor = {
  id: number;
  name: string;
  initials: string;
  bloodType: BloodType;
  area: string;
  distance: string;
  tint: string;
};

const exampleDonors: ExampleDonor[] = [
  {
    id: 1,
    name: "Asha Mehra",
    initials: "AM",
    bloodType: "O+",
    area: "North Quarter",
    distance: "2.4 miles away",
    tint: "rose",
  },
  {
    id: 2,
    name: "Elliot James",
    initials: "EJ",
    bloodType: "A−",
    area: "Riverside",
    distance: "3.1 miles away",
    tint: "ivory",
  },
  {
    id: 3,
    name: "Mina Alvarez",
    initials: "MA",
    bloodType: "B+",
    area: "Old Town",
    distance: "4.8 miles away",
    tint: "dusty",
  },
  {
    id: 4,
    name: "Noah Bennett",
    initials: "NB",
    bloodType: "O−",
    area: "West End",
    distance: "5.2 miles away",
    tint: "pink",
  },
];

const bloodTypes: BloodType[] = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018

function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className="rr-brand-mark"
      fill="none"
      viewBox="0 0 34 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2.3C13.6 8.1 4 17.3 4 25.1A13 13 0 0 0 30 25C30 17.3 20.4 8.1 17 2.3Z"
        fill="currentColor"
      />
      <path
        d="M11.1 26.9h4.1c3.3 0 5.5-2.2 5.5-5.2 0-2.8 1.9-4.8 4.8-4.8"
        stroke="var(--background)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="10.7" cy="26.9" r="1.7" fill="var(--background)" />
      <circle cx="25.7" cy="16.9" r="1.7" fill="var(--background)" />
    </svg>
  );
}

function RedRouteHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [bloodType, setBloodType] = useState("all");
  const [requestedDonorId, setRequestedDonorId] = useState<number | null>(null);
  const [registeredName, setRegisteredName] = useState("");
  const [registrationComplete, setRegistrationComplete] = useState(false);
<<<<<<< HEAD
  const [registrationLoading, setRegistrationLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const [matchingDonors, setMatchingDonors] = useState<Donor[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [requestName, setRequestName] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const [requestLoading, setRequestLoading] = useState(false);
  const [requestFeedback, setRequestFeedback] = useState("");
  const [adminOpen, setAdminOpen] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminSession, setAdminSession] = useState<{ username: string } | null>(null);
  const [adminError, setAdminError] = useState("");
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminDonors, setAdminDonors] = useState<AdminDonor[]>([]);
  const [adminRequests, setAdminRequests] = useState<AdminRequest[]>([]);

  async function loadDonors(
    cityFilter = location,
    bloodFilter = bloodType,
  ) {
    setSearchLoading(true);
    setSearchError("");
    try {
      const params = new URLSearchParams();
      if (cityFilter.trim()) params.set("city", cityFilter.trim());
      if (bloodFilter !== "all") params.set("bloodGroup", bloodFilter);
      const data = await apiRequest<{ success: boolean; donors: Donor[] }>(
        `/api/donors${params.size ? `?${params.toString()}` : ""}`,
      );
      setMatchingDonors(
        data.donors.map((donor, index) => ({
          ...donor,
          tint: ["rose", "ivory", "dusty", "pink"][index % 4],
        })),
      );
    } catch (error) {
      setSearchError(error instanceof Error ? error.message : "Could not load donor listings.");
      setMatchingDonors([]);
    } finally {
      setSearchLoading(false);
      setHasSearched(true);
    }
  }

  useEffect(() => {
    void loadDonors();
  }, []);

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await loadDonors();
    document.getElementById("donor-results")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (registrationLoading) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const submittedName = data.get("name");
    const pinCode = data.get("pinCode");
    const availability = data.get("availability");
    const bloodGroup = data.get("bloodType");
    setRegisteredName(typeof submittedName === "string" ? submittedName.trim() : "");
    setRegistrationLoading(true);
    setRegistrationError("");
    setRegistrationComplete(false);
    try {
      await apiRequest<{ success: boolean }>("/api/donors", {
        method: "POST",
        body: JSON.stringify({
          name: submittedName,
          city: data.get("city"),
          pinCode,
          bloodGroup,
          availability,
        }),
      });
      setRegistrationComplete(true);
      form.reset();
    } catch (error) {
      setRegistrationError(error instanceof Error ? error.message : "Registration could not be saved.");
    } finally {
      setRegistrationLoading(false);
    }
  }

  async function handleRequest(donorId: number) {
    if (requestLoading) return;
    setRequestLoading(true);
    setRequestFeedback("");
    try {
      await apiRequest<{ success: boolean }>("/api/requests", {
        method: "POST",
        body: JSON.stringify({
          donorId,
          requesterName: requestName,
          message: requestMessage,
        }),
      });
      setRequestFeedback("Your request was submitted.");
      setRequestName("");
      setRequestMessage("");
    } catch (error) {
      setRequestFeedback(error instanceof Error ? error.message : "Could not submit your request.");
    } finally {
      setRequestLoading(false);
    }
  }

  async function loadAdminData() {
    setAdminLoading(true);
    setAdminError("");
    try {
      const [donorData, requestData] = await Promise.all([
        apiRequest<{ success: boolean; donors: AdminDonor[] }>("/api/admin/donors"),
        apiRequest<{ success: boolean; requests: AdminRequest[] }>("/api/admin/requests"),
      ]);
      setAdminDonors(donorData.donors);
      setAdminRequests(requestData.requests);
    } catch (error) {
      setAdminSession(null);
      setAdminError(error instanceof Error ? error.message : "Could not load admin data.");
    } finally {
      setAdminLoading(false);
    }
  }

  async function handleAdminLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAdminLoading(true);
    setAdminError("");
    try {
      const data = await apiRequest<{ success: boolean; admin: { username: string } }>(
        "/api/admin/login",
        {
          method: "POST",
          body: JSON.stringify({ username: adminUsername, password: adminPassword }),
        },
      );
      setAdminSession({ username: data.admin.username });
      setAdminPassword("");
      await loadAdminData();
    } catch (error) {
      setAdminError(error instanceof Error ? error.message : "Login failed.");
    } finally {
      setAdminLoading(false);
    }
  }

  async function handleAdminLogout() {
    await apiRequest<{ success: boolean }>("/api/admin/logout", { method: "POST" });
    setAdminSession(null);
    setAdminDonors([]);
    setAdminRequests([]);
  }

  async function updateDonorStatus(id: number, status: AdminDonor["status"]) {
    await apiRequest(`/api/admin/donors/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
    await loadAdminData();
  }

  async function updateRequestStatus(id: number, status: AdminRequest["status"]) {
    await apiRequest(`/api/admin/requests/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
    await loadAdminData();
=======

  const matchingDonors = useMemo(() => {
    const locationQuery = location.trim().toLowerCase();

    return exampleDonors.filter((donor) => {
      const matchesLocation =
        !locationQuery ||
        `${donor.area} ${donor.name}`.toLowerCase().includes(locationQuery);
      const matchesBloodType = bloodType === "all" || donor.bloodType === bloodType;

      return matchesLocation && matchesBloodType;
    });
  }, [bloodType, location]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("donor-results")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedName = new FormData(event.currentTarget).get("name");
    setRegisteredName(typeof submittedName === "string" ? submittedName.trim() : "");
    setRegistrationComplete(true);
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="rr-page">
      <a className="rr-skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="rr-site-header">
        <div className="rr-header-inner">
          <a aria-label="RedRoute home" className="rr-brand" href="#home" onClick={closeMenu}>
            <BrandMark />
            <span>RedRoute</span>
          </a>

          <nav aria-label="Main navigation" className={`rr-nav${menuOpen ? " rr-nav--open" : ""}`}>
            <a className="rr-nav-link rr-nav-link--active" href="#home" onClick={closeMenu}>
              Home
            </a>
            <a className="rr-nav-link" href="#find-donors" onClick={closeMenu}>
              Find Donors
            </a>
            <a className="rr-nav-link" href="#become-a-donor" onClick={closeMenu}>
              Become a Donor
            </a>
            <a className="rr-nav-link" href="#how-it-works" onClick={closeMenu}>
              How It Works
            </a>
          </nav>

          <div className="rr-header-actions">
            <Button asChild className="rr-header-cta" size="default">
              <a href="#become-a-donor" onClick={closeMenu}>
                Become a Donor <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
<<<<<<< HEAD
            <button
              className="rr-admin-button"
              onClick={() => {
                setAdminOpen(true);
                if (!adminSession) {
                  void apiRequest<{ admin: { username: string } }>("/api/admin/session")
                    .then((data) => {
                      setAdminSession({ username: data.admin.username });
                      void loadAdminData();
                    })
                    .catch(() => undefined);
                }
              }}
              type="button"
            >
              Admin
            </button>
=======
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
            <Button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="rr-menu-toggle"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
              size="icon"
              variant="ghost"
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section aria-labelledby="hero-title" className="rr-hero" id="home">
          <div className="rr-hero-grid rr-container">
            <div className="rr-hero-copy">
              <p className="rr-eyebrow">
                <span aria-hidden="true" className="rr-eyebrow-mark" />
                The RedRoute community
              </p>
              <h1 className="rr-hero-title" id="hero-title">
                One connection.
                <br />
                One donation.
                <br />
                A chance at <em>life.</em>
              </h1>
              <p className="rr-hero-description">
                Finding a blood donor shouldn&apos;t be complicated. RedRoute helps people connect
                with blood donors in their community, one search at a time.
              </p>
              <div className="rr-hero-actions">
                <Button asChild className="rr-primary-action" size="lg">
                  <a href="#find-donors">
                    Find a Donor <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild className="rr-secondary-action" size="lg" variant="outline">
                  <a href="#become-a-donor">Become a Donor</a>
                </Button>
              </div>
              <p className="rr-reassurance">
                <HeartHandshake aria-hidden="true" />
                Every donor begins with a simple decision.
              </p>
            </div>

            <div
              aria-label="A symbolic route map connecting neighbors through blood donation"
              className="rr-hero-visual"
              role="img"
            >
              <div className="rr-art-topline">
                <span>RedRoute / Community route</span>
                <span>RR · 01</span>
              </div>
              <svg aria-hidden="true" className="rr-art-route" viewBox="0 0 520 500">
                <path
                  className="rr-art-route-track"
                  d="M91 158C120 87 207 51 288 65C373 79 434 149 429 235C425 320 357 383 271 390C188 398 108 352 82 279C67 238 73 199 91 158Z"
                />
                <path
                  className="rr-art-route-path"
                  d="M91 158C136 174 171 210 206 249C240 287 288 299 331 284C369 271 400 249 429 235"
                />
                <circle className="rr-art-route-node" cx="91" cy="158" r="8" />
                <circle className="rr-art-route-node" cx="288" cy="65" r="8" />
                <circle className="rr-art-route-node" cx="429" cy="235" r="8" />
                <circle className="rr-art-route-node" cx="271" cy="390" r="8" />
              </svg>
              <div aria-hidden="true" className="rr-art-hub">
                <BrandMark />
                <span>Care moves here</span>
              </div>
              <div className="rr-art-marker rr-art-marker--first">
                <span className="rr-art-marker-number">01</span>
                <span>
                  <strong>A need, nearby</strong>
                  <span>Start with community</span>
                </span>
              </div>
              <div className="rr-art-marker rr-art-marker--second">
                <span className="rr-art-marker-number">02</span>
                <span>
                  <strong>A thoughtful match</strong>
                  <span>One step at a time</span>
                </span>
              </div>
              <div className="rr-art-footer">
                <span aria-hidden="true" className="rr-art-footer-rule" />
                <span>Good connections are built on care.</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="RedRoute values" className="rr-value-rail">
          <div className="rr-container rr-value-grid">
            <p className="rr-value-intro">Care moves through community.</p>
            <p>
              <span className="rr-value-number">01</span> People first, always
            </p>
            <p>
              <span className="rr-value-number">02</span> A thoughtful way to reach out
            </p>
            <p>
              <span className="rr-value-number">03</span> One community, many lifelines
            </p>
          </div>
        </section>

        <section aria-labelledby="find-title" className="rr-directory-section" id="find-donors">
          <div className="rr-container">
            <div className="rr-section-heading rr-directory-heading">
              <div>
                <p className="rr-eyebrow">Find a connection</p>
                <h2 className="rr-editorial-title" id="find-title">
                  The right match,
                  <br />
                  a little closer.
                </h2>
              </div>
              <p className="rr-section-intro">
                Start with a blood group and a place. We&apos;ll help make the next step feel more
                human.
              </p>
            </div>

            <form aria-label="Search donor directory" className="rr-search-form" onSubmit={handleSearch}>
              <div className="rr-search-field rr-location-field">
                <label htmlFor="donor-location">Your area</label>
                <div className="rr-input-with-icon">
                  <MapPin aria-hidden="true" className="rr-field-icon" />
                  <Input
                    autoComplete="postal-code"
                    id="donor-location"
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="City, neighborhood or postcode"
                    value={location}
                  />
                </div>
              </div>
              <div className="rr-search-field rr-type-field">
                <label htmlFor="blood-type-filter">Blood group</label>
                <Select onValueChange={setBloodType} value={bloodType}>
                  <SelectTrigger aria-label="Blood group" className="rr-select-trigger" id="blood-type-filter">
                    <SelectValue placeholder="Any blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any blood group</SelectItem>
                    {bloodTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="rr-search-button" size="lg" type="submit">
                <Search aria-hidden="true" /> Find matches
              </Button>
            </form>

            <div className="rr-results-heading" id="donor-results">
              <div>
<<<<<<< HEAD
                <h3>Active community donors</h3>
                <p>Approved profiles available for introduction requests</p>
              </div>
              <span className="rr-results-count">
                {searchLoading
                  ? "Loading..."
                  : `${matchingDonors.length} ${matchingDonors.length === 1 ? "profile" : "profiles"}`}
              </span>
            </div>
            {searchError && (
              <p aria-live="polite" className="rr-inline-notice rr-inline-error">
                {searchError}
              </p>
            )}
=======
                <h3>Community preview</h3>
                <p>Example profiles only · not live donor listings</p>
              </div>
              <span className="rr-results-count">
                {matchingDonors.length} {matchingDonors.length === 1 ? "profile" : "profiles"}
              </span>
            </div>

            {requestedDonorId !== null && (
              <p aria-live="polite" className="rr-inline-notice">
                Introduction preview prepared. No message was sent to a donor.
              </p>
            )}

>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
            {matchingDonors.length > 0 ? (
              <div className="rr-donor-grid">
                {matchingDonors.map((donor) => (
                  <article className="rr-donor-card" key={donor.id}>
                    <div className={`rr-donor-avatar rr-donor-avatar--${donor.tint}`} aria-hidden="true">
<<<<<<< HEAD
                      {donor.display_name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                    <div className="rr-donor-info">
                      <div className="rr-donor-name-row">
                        <h4>{donor.display_name}</h4>
                        <span className="rr-blood-badge">{donor.blood_group}</span>
                      </div>
                      <p className="rr-donor-location">
                        <MapPin aria-hidden="true" /> {donor.city} <span>·</span> {donor.availability}
                      </p>
                    </div>
                    <Button
                      aria-label={`Request an introduction to ${donor.display_name}`}
                      className="rr-request-button"
                      onClick={() => {
                        setRequestedDonorId(donor.id);
                        setRequestFeedback("");
                      }}
                      size="sm"
                      variant="outline"
                    >
                      {requestedDonorId === donor.id ? "Close request" : "Request an introduction"}
                    </Button>
                    {requestedDonorId === donor.id && (
                      <form
                        className="rr-request-form"
                        onSubmit={(event) => {
                          event.preventDefault();
                          void handleRequest(donor.id);
                        }}
                      >
                        <Input
                          aria-label="Your name"
                          name="requesterName"
                          onChange={(event) => setRequestName(event.target.value)}
                          placeholder="Your name"
                          required
                          value={requestName}
                        />
                        <textarea
                          aria-label="Request message"
                          name="message"
                          onChange={(event) => setRequestMessage(event.target.value)}
                          placeholder="Briefly describe what you need"
                          required
                          value={requestMessage}
                        />
                        <Button
                          disabled={requestLoading}
                          onClick={() => void handleRequest(donor.id)}
                          size="sm"
                          type="button"
                        >
                          {requestLoading ? "Submitting..." : "Submit request"}
                        </Button>
                        {requestFeedback && <p aria-live="polite">{requestFeedback}</p>}
                      </form>
                    )}
                  </article>
                ))}
              </div>
            ) : hasSearched && !searchLoading ? (
              <div className="rr-empty-state">
                <Search aria-hidden="true" />
                <h4>No approved donors match those details.</h4>
                <p>Try another area or blood group.</p>
                <Button
                  className="rr-clear-search"
                  onClick={async () => {
                    setLocation("");
                    setBloodType("all");
                    await loadDonors("", "all");
=======
                      {donor.initials}
                    </div>
                    <div className="rr-donor-info">
                      <div className="rr-donor-name-row">
                        <h4>{donor.name}</h4>
                        <span className="rr-blood-badge">{donor.bloodType}</span>
                      </div>
                      <p className="rr-donor-location">
                        <MapPin aria-hidden="true" /> {donor.area} <span>·</span> {donor.distance}
                      </p>
                      <p className="rr-example-label">Example profile</p>
                    </div>
                    <Button
                      aria-label={`Prepare an introduction to ${donor.name}`}
                      className="rr-request-button"
                      onClick={() => setRequestedDonorId(donor.id)}
                      size="sm"
                      variant="outline"
                    >
                      {requestedDonorId === donor.id ? "Prepared" : "Request an introduction"}
                    </Button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rr-empty-state">
                <Search aria-hidden="true" />
                <h4>No example profiles match those details.</h4>
                <p>Try another area or blood group to explore the directory preview.</p>
                <Button
                  className="rr-clear-search"
                  onClick={() => {
                    setLocation("");
                    setBloodType("all");
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
                  }}
                  size="sm"
                  variant="outline"
                >
                  Clear search
                </Button>
              </div>
<<<<<<< HEAD
            ) : null}

            <p className="rr-directory-note">
              <ShieldCheck aria-hidden="true" />
              Profiles are fictional or must remain medically unscreened. For urgent needs, contact
              local emergency or blood services directly.
=======
            )}

            <p className="rr-directory-note">
              <ShieldCheck aria-hidden="true" />
              This preview uses fictional profiles. For urgent needs, contact local emergency or
              blood services directly.
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
            </p>
          </div>
        </section>

        <section aria-labelledby="how-title" className="rr-how-section" id="how-it-works">
          <div className="rr-container">
            <div className="rr-how-heading">
              <div>
                <p className="rr-eyebrow">Small steps, real care</p>
                <h2 className="rr-editorial-title" id="how-title">
                  A clearer path
                  <br />
                  from need to help.
                </h2>
              </div>
              <p className="rr-section-intro">
                Good connections start with clear information and a little kindness.
              </p>
            </div>

            <div className="rr-steps-grid">
              <article className="rr-step">
                <span className="rr-step-number">01</span>
                <span className="rr-step-icon">
                  <Search aria-hidden="true" />
                </span>
                <h3>Search nearby</h3>
                <p>Choose the blood group and area that fit your request.</p>
                <a className="rr-step-link" href="#find-donors">
                  Explore the directory <ArrowRight aria-hidden="true" />
                </a>
              </article>
              <article className="rr-step">
                <span className="rr-step-number">02</span>
                <span className="rr-step-icon">
                  <HeartHandshake aria-hidden="true" />
                </span>
                <h3>Make a thoughtful ask</h3>
                <p>Reach out with respect, context and room for a donor to decide.</p>
                <span className="rr-step-static">Consent comes first</span>
              </article>
              <article className="rr-step">
                <span className="rr-step-number">03</span>
                <span className="rr-step-icon">
                  <Clock3 aria-hidden="true" />
                </span>
                <h3>Let care move forward</h3>
                <p>Coordinate next steps with a trusted local donation service.</p>
                <span className="rr-step-static">Local guidance matters</span>
              </article>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="join-title"
          className="rr-join-section"
          id="become-a-donor"
        >
          <div className="rr-container rr-join-grid">
            <div className="rr-join-copy">
              <p className="rr-eyebrow">For the willing</p>
              <h2 className="rr-editorial-title" id="join-title">
                You could be
                <br />
                someone&apos;s next
                <br />
                <em>bright spot.</em>
              </h2>
              <p className="rr-section-intro">
                A simple choice can mean a great deal to someone else. Start with your interest;
                your local donation service can guide you from there.
              </p>
              <p className="rr-join-reassurance">
                <CheckCircle2 aria-hidden="true" />
                No pressure. Just a first step.
              </p>
            </div>

            <div className="rr-join-form-wrap">
              <div className="rr-join-form-heading">
                <span className="rr-form-icon">
                  <HeartHandshake aria-hidden="true" />
                </span>
                <div>
                  <p className="rr-form-kicker">A good place to begin</p>
                  <h3>Share your interest</h3>
                </div>
              </div>
              <form className="rr-join-form" onSubmit={handleRegistration}>
                <div className="rr-form-row">
                  <div className="rr-form-field">
                    <label htmlFor="donor-name">Your name</label>
                    <Input
                      autoComplete="name"
                      id="donor-name"
                      name="name"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="rr-form-field">
                    <label htmlFor="donor-email">Email address</label>
                    <Input
                      autoComplete="email"
                      id="donor-email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="rr-form-row">
                  <div className="rr-form-field">
                    <label htmlFor="donor-city">City or area</label>
                    <Input
                      autoComplete="address-level2"
                      id="donor-city"
                      name="city"
                      placeholder="Where you&apos;re based"
                      required
                    />
                  </div>
                  <div className="rr-form-field">
<<<<<<< HEAD
                    <label htmlFor="donor-pin">PIN code</label>
                    <Input
                      id="donor-pin"
                      inputMode="numeric"
                      name="pinCode"
                      pattern="[1-9][0-9]{5}"
                      placeholder="6-digit PIN code"
                      required
                    />
                  </div>
                </div>
                <div className="rr-form-row">
                  <div className="rr-form-field">
=======
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
                    <label htmlFor="donor-blood-type">Blood group</label>
                    <Select name="bloodType" required>
                      <SelectTrigger
                        aria-label="Your blood group"
                        className="rr-select-trigger"
                        id="donor-blood-type"
                      >
                        <SelectValue placeholder="Choose one" />
                      </SelectTrigger>
                      <SelectContent>
                        {bloodTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
<<<<<<< HEAD
                  <div className="rr-form-field">
                    <label htmlFor="donor-availability">Availability</label>
                    <Select name="availability" required>
                      <SelectTrigger
                        aria-label="Your availability"
                        className="rr-select-trigger"
                        id="donor-availability"
                      >
                        <SelectValue placeholder="Choose availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Weekends only">Weekends only</SelectItem>
                        <SelectItem value="Evenings only">Evenings only</SelectItem>
                        <SelectItem value="Not available now">Not available now</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="rr-join-submit" disabled={registrationLoading} size="lg" type="submit">
                  {registrationLoading
                    ? "Submitting..."
                    : registrationComplete
                      ? "Registration submitted"
                      : "Continue as a donor"}
                  <ArrowRight aria-hidden="true" />
                </Button>
                {registrationError && (
                  <p aria-live="polite" className="rr-registration-notice rr-registration-error">
                    {registrationError}
                  </p>
                )}
                {registrationComplete && (
                  <p aria-live="polite" className="rr-registration-notice">
                    <CheckCircle2 aria-hidden="true" />
                    {registeredName ? `Thank you, ${registeredName}. ` : "Thank you. "}Your
                    registration has been saved and will be reviewed before activation.
=======
                </div>
                <Button className="rr-join-submit" size="lg" type="submit">
                  {registrationComplete ? "Preview complete" : "Continue as a donor"}
                  <ArrowRight aria-hidden="true" />
                </Button>
                {registrationComplete && (
                  <p aria-live="polite" className="rr-registration-notice">
                    <CheckCircle2 aria-hidden="true" />
                    {registeredName ? `Thank you, ${registeredName}. ` : "Thank you. "}This preview
                    doesn&apos;t save or share your details.
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
                  </p>
                )}
                <p className="rr-form-footnote">
                  Eligibility and donation guidance should always come from a qualified local blood
<<<<<<< HEAD
                  service. Profiles are published only after approval.
=======
                  service. This preview does not publish a donor profile.
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
                </p>
              </form>
            </div>
          </div>
        </section>

        <section aria-label="A note from RedRoute" className="rr-closing-note">
          <div className="rr-container rr-closing-inner">
            <p>One generous choice can change a day.</p>
            <a href="#home">
              Back to the beginning <ChevronDown aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

<<<<<<< HEAD
      {adminOpen && (
        <div className="rr-admin-overlay" role="presentation">
          <section
            aria-label="RedRoute admin"
            aria-modal="true"
            className="rr-admin-panel"
            role="dialog"
          >
            <div className="rr-admin-header">
              <div>
                <p className="rr-eyebrow">RedRoute administration</p>
                <h2>{adminSession ? `Welcome, ${adminSession.username}` : "Admin login"}</h2>
              </div>
              <button
                aria-label="Close admin panel"
                className="rr-admin-close"
                onClick={() => setAdminOpen(false)}
                type="button"
              >
                <X aria-hidden="true" />
              </button>
            </div>

            {!adminSession ? (
              <form className="rr-admin-login" onSubmit={handleAdminLogin}>
                <label htmlFor="admin-username">Username</label>
                <Input
                  autoComplete="username"
                  id="admin-username"
                  onChange={(event) => setAdminUsername(event.target.value)}
                  required
                  value={adminUsername}
                />
                <label htmlFor="admin-password">Password</label>
                <Input
                  autoComplete="current-password"
                  id="admin-password"
                  onChange={(event) => setAdminPassword(event.target.value)}
                  required
                  type="password"
                  value={adminPassword}
                />
                <Button disabled={adminLoading} type="submit">
                  {adminLoading ? "Signing in..." : "Sign in"}
                </Button>
                {adminError && <p className="rr-inline-error">{adminError}</p>}
              </form>
            ) : (
              <div className="rr-admin-content">
                <div className="rr-admin-actions">
                  <Button
                    onClick={() => void loadAdminData()}
                    size="sm"
                    type="button"
                    variant="outline"
                  >
                    Refresh
                  </Button>
                  <Button
                    onClick={() => void handleAdminLogout()}
                    size="sm"
                    type="button"
                    variant="outline"
                  >
                    Logout
                  </Button>
                </div>
                {adminError && <p className="rr-inline-error">{adminError}</p>}

                <div className="rr-admin-section">
                  <h3>Donors</h3>
                  {adminDonors.map((donor) => (
                    <div className="rr-admin-row" key={donor.id}>
                      <div>
                        <strong>{donor.display_name}</strong>
                        <span>{donor.blood_group} · {donor.city} · {donor.status}</span>
                      </div>
                      <select
                        aria-label={`Status for ${donor.display_name}`}
                        onChange={(event) =>
                          void updateDonorStatus(
                            donor.id,
                            event.target.value as AdminDonor["status"],
                          )
                        }
                        value={donor.status}
                      >
                        <option value="pending">pending</option>
                        <option value="active">active</option>
                        <option value="rejected">rejected</option>
                        <option value="inactive">inactive</option>
                      </select>
                    </div>
                  ))}
                </div>

                <div className="rr-admin-section">
                  <h3>Blood requests</h3>
                  {adminRequests.map((request) => (
                    <div className="rr-admin-row" key={request.id}>
                      <div>
                        <strong>{request.requester_name}</strong>
                        <span>
                          For {request.donor_name} · {request.status}
                        </span>
                      </div>
                      <select
                        aria-label={`Status for request ${request.id}`}
                        onChange={(event) =>
                          void updateRequestStatus(
                            request.id,
                            event.target.value as AdminRequest["status"],
                          )
                        }
                        value={request.status}
                      >
                        <option value="pending">pending</option>
                        <option value="contacted">contacted</option>
                        <option value="fulfilled">fulfilled</option>
                        <option value="closed">closed</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      )}

=======
>>>>>>> 0916039e0e6a65895f2875a1ef6c715e3fd58018
      <footer className="rr-footer">
        <div className="rr-container rr-footer-inner">
          <a aria-label="RedRoute home" className="rr-brand rr-footer-brand" href="#home">
            <BrandMark />
            <span>RedRoute</span>
          </a>
          <p>Made for the moments when showing up matters.</p>
          <span className="rr-footer-copyright">© 2026 RedRoute</span>
        </div>
      </footer>
    </div>
  );
}