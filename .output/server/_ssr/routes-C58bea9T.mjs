import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as MapPin, c as CircleCheck, d as Check, f as ArrowUpRight, i as Menu, l as ChevronUp, n as ShieldCheck, o as HeartHandshake, p as ArrowRight, r as Search, s as Clock3, t as X, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C58bea9T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-hidden focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm focus:outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var API_URL = ({
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_API_URL": "http://localhost:5000"
}["VITE_API_URL"] || "http://localhost:5000").replace(/\/$/, "");
async function apiRequest(path, options = {}) {
	let response;
	try {
		response = await fetch(`${API_URL}${path}`, {
			...options,
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				...options.headers || {}
			}
		});
	} catch {
		throw new Error("Could not connect to the RedRoute server. Make sure the backend is running.");
	}
	const data = await response.json().catch(() => ({}));
	if (!response.ok) {
		const error = new Error(data.message || "The request could not be completed.");
		error.status = response.status;
		throw error;
	}
	return data;
}
var bloodTypes = [
	"A+",
	"A-",
	"B+",
	"B-",
	"AB+",
	"AB-",
	"O+",
	"O-"
];
function BrandMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": "true",
		className: "rr-brand-mark",
		fill: "none",
		viewBox: "0 0 34 40",
		xmlns: "http://www.w3.org/2000/svg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M17 2.3C13.6 8.1 4 17.3 4 25.1A13 13 0 0 0 30 25C30 17.3 20.4 8.1 17 2.3Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11.1 26.9h4.1c3.3 0 5.5-2.2 5.5-5.2 0-2.8 1.9-4.8 4.8-4.8",
				stroke: "var(--background)",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "1.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10.7",
				cy: "26.9",
				r: "1.7",
				fill: "var(--background)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25.7",
				cy: "16.9",
				r: "1.7",
				fill: "var(--background)"
			})
		]
	});
}
function RedRouteHome() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [location, setLocation] = (0, import_react.useState)("");
	const [bloodType, setBloodType] = (0, import_react.useState)("all");
	const [requestedDonorId, setRequestedDonorId] = (0, import_react.useState)(null);
	const [registeredName, setRegisteredName] = (0, import_react.useState)("");
	const [registrationComplete, setRegistrationComplete] = (0, import_react.useState)(false);
	const [registrationLoading, setRegistrationLoading] = (0, import_react.useState)(false);
	const [registrationError, setRegistrationError] = (0, import_react.useState)("");
	const [matchingDonors, setMatchingDonors] = (0, import_react.useState)([]);
	const [searchLoading, setSearchLoading] = (0, import_react.useState)(false);
	const [searchError, setSearchError] = (0, import_react.useState)("");
	const [hasSearched, setHasSearched] = (0, import_react.useState)(false);
	const [requestName, setRequestName] = (0, import_react.useState)("");
	const [requestMessage, setRequestMessage] = (0, import_react.useState)("");
	const [requestLoading, setRequestLoading] = (0, import_react.useState)(false);
	const [requestFeedback, setRequestFeedback] = (0, import_react.useState)("");
	const [adminOpen, setAdminOpen] = (0, import_react.useState)(false);
	const [adminUsername, setAdminUsername] = (0, import_react.useState)("");
	const [adminPassword, setAdminPassword] = (0, import_react.useState)("");
	const [adminSession, setAdminSession] = (0, import_react.useState)(null);
	const [adminError, setAdminError] = (0, import_react.useState)("");
	const [adminLoading, setAdminLoading] = (0, import_react.useState)(false);
	const [adminDonors, setAdminDonors] = (0, import_react.useState)([]);
	const [adminRequests, setAdminRequests] = (0, import_react.useState)([]);
	const loadDonors = (0, import_react.useCallback)(async (cityFilter = location, bloodFilter = bloodType) => {
		setSearchLoading(true);
		setSearchError("");
		try {
			const params = new URLSearchParams();
			if (cityFilter.trim()) params.set("city", cityFilter.trim());
			if (bloodFilter !== "all") params.set("bloodGroup", bloodFilter);
			const data = await apiRequest(`/api/donors${params.size ? `?${params.toString()}` : ""}`);
			const donorTints = [
				"rose",
				"ivory",
				"dusty",
				"pink"
			];
			setMatchingDonors(data.donors.map((donor, index) => ({
				...donor,
				tint: donorTints[index % donorTints.length] ?? "rose"
			})));
		} catch (error) {
			setSearchError(error instanceof Error ? error.message : "Could not load donor listings.");
			setMatchingDonors([]);
		} finally {
			setSearchLoading(false);
			setHasSearched(true);
		}
	}, [bloodType, location]);
	(0, import_react.useEffect)(() => {
		loadDonors();
	}, [loadDonors]);
	async function handleSearch(event) {
		event.preventDefault();
		await loadDonors();
		document.getElementById("donor-results")?.scrollIntoView({ behavior: "smooth" });
	}
	async function handleRegistration(event) {
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
			await apiRequest("/api/donors", {
				method: "POST",
				body: JSON.stringify({
					name: submittedName,
					city: data.get("city"),
					pinCode,
					bloodGroup,
					availability
				})
			});
			setRegistrationComplete(true);
			form.reset();
		} catch (error) {
			setRegistrationError(error instanceof Error ? error.message : "Registration could not be saved.");
		} finally {
			setRegistrationLoading(false);
		}
	}
	async function handleRequest(donorId) {
		if (requestLoading) return;
		setRequestLoading(true);
		setRequestFeedback("");
		try {
			await apiRequest("/api/requests", {
				method: "POST",
				body: JSON.stringify({
					donorId,
					requesterName: requestName,
					message: requestMessage
				})
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
			const [donorData, requestData] = await Promise.all([apiRequest("/api/admin/donors"), apiRequest("/api/admin/requests")]);
			setAdminDonors(donorData.donors);
			setAdminRequests(requestData.requests);
		} catch (error) {
			setAdminSession(null);
			setAdminError(error instanceof Error ? error.message : "Could not load admin data.");
		} finally {
			setAdminLoading(false);
		}
	}
	async function handleAdminLogin(event) {
		event.preventDefault();
		setAdminLoading(true);
		setAdminError("");
		try {
			const data = await apiRequest("/api/admin/login", {
				method: "POST",
				body: JSON.stringify({
					username: adminUsername,
					password: adminPassword
				})
			});
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
		await apiRequest("/api/admin/logout", { method: "POST" });
		setAdminSession(null);
		setAdminDonors([]);
		setAdminRequests([]);
	}
	async function updateDonorStatus(id, status) {
		await apiRequest(`/api/admin/donors/${id}/status`, {
			method: "PATCH",
			body: JSON.stringify({ status })
		});
		await loadAdminData();
	}
	async function updateRequestStatus(id, status) {
		await apiRequest(`/api/admin/requests/${id}/status`, {
			method: "PATCH",
			body: JSON.stringify({ status })
		});
		await loadAdminData();
	}
	function closeMenu() {
		setMenuOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rr-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "rr-skip-link",
				href: "#main-content",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "rr-site-header",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rr-header-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							"aria-label": "RedRoute home",
							className: "rr-brand",
							href: "#home",
							onClick: closeMenu,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RedRoute" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Main navigation",
							className: `rr-nav${menuOpen ? " rr-nav--open" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rr-nav-link rr-nav-link--active",
									href: "#home",
									onClick: closeMenu,
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rr-nav-link",
									href: "#find-donors",
									onClick: closeMenu,
									children: "Find Donors"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rr-nav-link",
									href: "#become-a-donor",
									onClick: closeMenu,
									children: "Become a Donor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rr-nav-link",
									href: "#how-it-works",
									onClick: closeMenu,
									children: "How It Works"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rr-header-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "rr-header-cta",
									size: "default",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#become-a-donor",
										onClick: closeMenu,
										children: ["Become a Donor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rr-admin-button",
									onClick: () => {
										setAdminOpen(true);
										if (!adminSession) apiRequest("/api/admin/session").then((data) => {
											setAdminSession({ username: data.admin.username });
											loadAdminData();
										}).catch(() => void 0);
									},
									type: "button",
									children: "Admin"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"aria-expanded": menuOpen,
									"aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
									className: "rr-menu-toggle",
									onClick: () => setMenuOpen((isOpen) => !isOpen),
									size: "icon",
									variant: "ghost",
									children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" })
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-labelledby": "hero-title",
						className: "rr-hero",
						id: "home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rr-hero-grid rr-container",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rr-hero-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "rr-eyebrow",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "rr-eyebrow-mark"
										}), "The RedRoute community"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "rr-hero-title",
										id: "hero-title",
										children: [
											"One connection.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"One donation.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"A chance at ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "life." })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rr-hero-description",
										children: "Finding a blood donor shouldn't be complicated. RedRoute helps people connect with blood donors in their community, one search at a time."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rr-hero-actions",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: "rr-primary-action",
											size: "lg",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#find-donors",
												children: ["Find a Donor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: "rr-secondary-action",
											size: "lg",
											variant: "outline",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#become-a-donor",
												children: "Become a Donor"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "rr-reassurance",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { "aria-hidden": "true" }), "Every donor begins with a simple decision."]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"aria-label": "A symbolic route map connecting neighbors through blood donation",
								className: "rr-hero-visual",
								role: "img",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rr-art-topline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RedRoute / Community route" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RR · 01" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										"aria-hidden": "true",
										className: "rr-art-route",
										viewBox: "0 0 520 500",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												className: "rr-art-route-track",
												d: "M91 158C120 87 207 51 288 65C373 79 434 149 429 235C425 320 357 383 271 390C188 398 108 352 82 279C67 238 73 199 91 158Z"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												className: "rr-art-route-path",
												d: "M91 158C136 174 171 210 206 249C240 287 288 299 331 284C369 271 400 249 429 235"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												className: "rr-art-route-node",
												cx: "91",
												cy: "158",
												r: "8"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												className: "rr-art-route-node",
												cx: "288",
												cy: "65",
												r: "8"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												className: "rr-art-route-node",
												cx: "429",
												cy: "235",
												r: "8"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												className: "rr-art-route-node",
												cx: "271",
												cy: "390",
												r: "8"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"aria-hidden": "true",
										className: "rr-art-hub",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Care moves here" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rr-art-marker rr-art-marker--first",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rr-art-marker-number",
											children: "01"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "A need, nearby" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start with community" })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rr-art-marker rr-art-marker--second",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rr-art-marker-number",
											children: "02"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "A thoughtful match" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "One step at a time" })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rr-art-footer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "rr-art-footer-rule"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Good connections are built on care." })]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-label": "RedRoute values",
						className: "rr-value-rail",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rr-container rr-value-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rr-value-intro",
									children: "Care moves through community."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rr-value-number",
									children: "01"
								}), " People first, always"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rr-value-number",
									children: "02"
								}), " A thoughtful way to reach out"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rr-value-number",
									children: "03"
								}), " One community, many lifelines"] })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-labelledby": "find-title",
						className: "rr-directory-section",
						id: "find-donors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rr-container",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rr-section-heading rr-directory-heading",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rr-eyebrow",
										children: "Find a connection"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "rr-editorial-title",
										id: "find-title",
										children: [
											"The right match,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"a little closer."
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rr-section-intro",
										children: "Start with a blood group and a place. We'll help make the next step feel more human."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									"aria-label": "Search donor directory",
									className: "rr-search-form",
									onSubmit: handleSearch,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rr-search-field rr-location-field",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "donor-location",
												children: "Your area"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rr-input-with-icon",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
													"aria-hidden": "true",
													className: "rr-field-icon"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													autoComplete: "postal-code",
													id: "donor-location",
													onChange: (event) => setLocation(event.target.value),
													placeholder: "City, neighborhood or postcode",
													value: location
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rr-search-field rr-type-field",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "blood-type-filter",
												children: "Blood group"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												onValueChange: setBloodType,
												value: bloodType,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													"aria-label": "Blood group",
													className: "rr-select-trigger",
													id: "blood-type-filter",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Any blood group" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "all",
													children: "Any blood group"
												}), bloodTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: type,
													children: type
												}, type))] })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											className: "rr-search-button",
											size: "lg",
											type: "submit",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": "true" }), " Find matches"]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rr-results-heading",
									id: "donor-results",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Active community donors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Approved profiles available for introduction requests" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rr-results-count",
										children: searchLoading ? "Loading..." : `${matchingDonors.length} ${matchingDonors.length === 1 ? "profile" : "profiles"}`
									})]
								}),
								searchError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"aria-live": "polite",
									className: "rr-inline-notice rr-inline-error",
									children: searchError
								}),
								matchingDonors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rr-donor-grid",
									children: matchingDonors.map((donor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rr-donor-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `rr-donor-avatar rr-donor-avatar--${donor.tint}`,
												"aria-hidden": "true",
												children: donor.display_name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rr-donor-info",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rr-donor-name-row",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: donor.display_name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rr-blood-badge",
														children: donor.blood_group
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "rr-donor-location",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }),
														" ",
														donor.city,
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
														" ",
														donor.availability
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												"aria-label": `Request an introduction to ${donor.display_name}`,
												className: "rr-request-button",
												onClick: () => {
													setRequestedDonorId(donor.id);
													setRequestFeedback("");
												},
												size: "sm",
												variant: "outline",
												children: requestedDonorId === donor.id ? "Close request" : "Request an introduction"
											}),
											requestedDonorId === donor.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
												className: "rr-request-form",
												onSubmit: (event) => {
													event.preventDefault();
													handleRequest(donor.id);
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"aria-label": "Your name",
														name: "requesterName",
														onChange: (event) => setRequestName(event.target.value),
														placeholder: "Your name",
														required: true,
														value: requestName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
														"aria-label": "Request message",
														name: "message",
														onChange: (event) => setRequestMessage(event.target.value),
														placeholder: "Briefly describe what you need",
														required: true,
														value: requestMessage
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														disabled: requestLoading,
														onClick: () => void handleRequest(donor.id),
														size: "sm",
														type: "button",
														children: requestLoading ? "Submitting..." : "Submit request"
													}),
													requestFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														"aria-live": "polite",
														children: requestFeedback
													})
												]
											})
										]
									}, donor.id))
								}) : hasSearched && !searchLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rr-empty-state",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": "true" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "No approved donors match those details." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Try another area or blood group." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											className: "rr-clear-search",
											onClick: async () => {
												setLocation("");
												setBloodType("all");
												await loadDonors("", "all");
											},
											size: "sm",
											variant: "outline",
											children: "Clear search"
										})
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "rr-directory-note",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { "aria-hidden": "true" }), "Profiles are fictional or must remain medically unscreened. For urgent needs, contact local emergency or blood services directly."]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-labelledby": "how-title",
						className: "rr-how-section",
						id: "how-it-works",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rr-container",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rr-how-heading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rr-eyebrow",
									children: "Small steps, real care"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "rr-editorial-title",
									id: "how-title",
									children: [
										"A clearer path",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"from need to help."
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rr-section-intro",
									children: "Good connections start with clear information and a little kindness."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rr-steps-grid",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rr-step",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rr-step-number",
												children: "01"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rr-step-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": "true" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Search nearby" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Choose the blood group and area that fit your request." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												className: "rr-step-link",
												href: "#find-donors",
												children: ["Explore the directory ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rr-step",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rr-step-number",
												children: "02"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rr-step-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { "aria-hidden": "true" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Make a thoughtful ask" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Reach out with respect, context and room for a donor to decide." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rr-step-static",
												children: "Consent comes first"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rr-step",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rr-step-number",
												children: "03"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rr-step-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { "aria-hidden": "true" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Let care move forward" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Coordinate next steps with a trusted local donation service." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rr-step-static",
												children: "Local guidance matters"
											})
										]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-labelledby": "join-title",
						className: "rr-join-section",
						id: "become-a-donor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rr-container rr-join-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rr-join-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rr-eyebrow",
										children: "For the willing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "rr-editorial-title",
										id: "join-title",
										children: [
											"You could be",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"someone's next",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "bright spot." })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rr-section-intro",
										children: "A simple choice can mean a great deal to someone else. Start with your interest; your local donation service can guide you from there."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "rr-join-reassurance",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { "aria-hidden": "true" }), "No pressure. Just a first step."]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rr-join-form-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rr-join-form-heading",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rr-form-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { "aria-hidden": "true" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rr-form-kicker",
										children: "A good place to begin"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Share your interest" })] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "rr-join-form",
									onSubmit: handleRegistration,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rr-form-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rr-form-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "donor-name",
													children: "Your name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													autoComplete: "name",
													id: "donor-name",
													name: "name",
													placeholder: "Full name",
													required: true
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rr-form-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "donor-email",
													children: "Email address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													autoComplete: "email",
													id: "donor-email",
													name: "email",
													placeholder: "you@example.com",
													required: true,
													type: "email"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rr-form-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rr-form-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "donor-city",
													children: "City or area"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													autoComplete: "address-level2",
													id: "donor-city",
													name: "city",
													placeholder: "Where you're based",
													required: true
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rr-form-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "donor-pin",
													children: "PIN code"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "donor-pin",
													inputMode: "numeric",
													name: "pinCode",
													pattern: "[1-9][0-9]{5}",
													placeholder: "6-digit PIN code",
													required: true
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rr-form-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rr-form-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "donor-blood-type",
													children: "Blood group"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													name: "bloodType",
													required: true,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														"aria-label": "Your blood group",
														className: "rr-select-trigger",
														id: "donor-blood-type",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose one" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: bloodTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: type,
														children: type
													}, type)) })]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rr-form-field",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "donor-availability",
													children: "Availability"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													name: "availability",
													required: true,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														"aria-label": "Your availability",
														className: "rr-select-trigger",
														id: "donor-availability",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose availability" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "Available",
															children: "Available"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "Weekends only",
															children: "Weekends only"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "Evenings only",
															children: "Evenings only"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "Not available now",
															children: "Not available now"
														})
													] })]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											className: "rr-join-submit",
											disabled: registrationLoading,
											size: "lg",
											type: "submit",
											children: [registrationLoading ? "Submitting..." : registrationComplete ? "Registration submitted" : "Continue as a donor", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
										}),
										registrationError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"aria-live": "polite",
											className: "rr-registration-notice rr-registration-error",
											children: registrationError
										}),
										registrationComplete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											"aria-live": "polite",
											className: "rr-registration-notice",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { "aria-hidden": "true" }),
												registeredName ? `Thank you, ${registeredName}. ` : "Thank you. ",
												"Your registration has been saved and will be reviewed before activation."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "rr-form-footnote",
											children: "Eligibility and donation guidance should always come from a qualified local blood service. Profiles are published only after approval."
										})
									]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-label": "A note from RedRoute",
						className: "rr-closing-note",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rr-container rr-closing-inner",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One generous choice can change a day." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#home",
								children: ["Back to the beginning ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { "aria-hidden": "true" })]
							})]
						})
					})
				]
			}),
			adminOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rr-admin-overlay",
				role: "presentation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-label": "RedRoute admin",
					"aria-modal": "true",
					className: "rr-admin-panel",
					role: "dialog",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rr-admin-header",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rr-eyebrow",
							children: "RedRoute administration"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: adminSession ? `Welcome, ${adminSession.username}` : "Admin login" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Close admin panel",
							className: "rr-admin-close",
							onClick: () => setAdminOpen(false),
							type: "button",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" })
						})]
					}), !adminSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "rr-admin-login",
						onSubmit: handleAdminLogin,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "admin-username",
								children: "Username"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								autoComplete: "username",
								id: "admin-username",
								onChange: (event) => setAdminUsername(event.target.value),
								required: true,
								value: adminUsername
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "admin-password",
								children: "Password"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								autoComplete: "current-password",
								id: "admin-password",
								onChange: (event) => setAdminPassword(event.target.value),
								required: true,
								type: "password",
								value: adminPassword
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								disabled: adminLoading,
								type: "submit",
								children: adminLoading ? "Signing in..." : "Sign in"
							}),
							adminError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rr-inline-error",
								children: adminError
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rr-admin-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rr-admin-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => void loadAdminData(),
									size: "sm",
									type: "button",
									variant: "outline",
									children: "Refresh"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => void handleAdminLogout(),
									size: "sm",
									type: "button",
									variant: "outline",
									children: "Logout"
								})]
							}),
							adminError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rr-inline-error",
								children: adminError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rr-admin-section",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Donors" }), adminDonors.map((donor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rr-admin-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: donor.display_name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										donor.blood_group,
										" · ",
										donor.city,
										" · ",
										donor.status
									] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										"aria-label": `Status for ${donor.display_name}`,
										onChange: (event) => void updateDonorStatus(donor.id, event.target.value),
										value: donor.status,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "pending",
												children: "pending"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "active",
												children: "active"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "rejected",
												children: "rejected"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "inactive",
												children: "inactive"
											})
										]
									})]
								}, donor.id))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rr-admin-section",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Blood requests" }), adminRequests.map((request) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rr-admin-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: request.requester_name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"For ",
										request.donor_name,
										" · ",
										request.status
									] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										"aria-label": `Status for request ${request.id}`,
										onChange: (event) => void updateRequestStatus(request.id, event.target.value),
										value: request.status,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "pending",
												children: "pending"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "contacted",
												children: "contacted"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "fulfilled",
												children: "fulfilled"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "closed",
												children: "closed"
											})
										]
									})]
								}, request.id))]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "rr-footer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rr-container rr-footer-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							"aria-label": "RedRoute home",
							className: "rr-brand rr-footer-brand",
							href: "#home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RedRoute" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made for the moments when showing up matters." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rr-footer-copyright",
							children: "© 2026 RedRoute"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { RedRouteHome as component };
