RedRoute

A calmer, clearer way to connect people who need blood with donors in their community.

Built for CodeClash · Team: Lirli Larila Coders · 

The Problem

When someone urgently needs blood, the search often starts in scattered group chats and forwarded messages. Information is outdated, hard to verify, and stressful to sort through, and willing donors often don't know where to begin.

Our Solution

RedRoute is a blood donor directory that makes both sides of that journey simple:

People in need can search by area and blood group and see approved community donors at a glance.
Willing donors can share their interest in under a minute, with no pressure.
Everyone is protected by a review step: registrations are checked before they appear publicly.

The tone of the product is deliberate: human, reassuring and clear, rather than clinical or alarming.

Features
Feature	What it does
Find donors	Search by area and blood group. Results show the donor's blood group, neighbourhood and availability.
Request an introduction	Reach out to a donor through the platform instead of exposing personal details.
Become a donor	A short registration form: name, email, city/area, PIN code, blood group and availability.
Review before activation	New registrations are saved and held for review. They are published only after approval.
Friendly empty states	If nothing matches, users see clear guidance and a one-click Clear search instead of a dead end.
How it works	A three-step guide: Search nearby → Make a thoughtful ask → Let care move forward.
Admin review area	Restricted area for reviewing and managing registrations.
Responsible-use notices	Clear reminders that profiles are samples and that urgent needs should go to local emergency or licensed blood services.
Screenshots
Home	Find donors	Become a donor
Home	Find donors	Become a donor



Tech Stack
Layer	Technology
Frontend	React, TypeScript
Backend	JavaScript (Node.js)
Data	JSON
Getting Started
Prerequisites
Node.js (v18 or later recommended)
npm
Run locally
bash
# 1. Clone the repository
git clone https://github.com/trini-irl/RedRoute-01.git
cd redroute

# 2. Install dependencies
npm install

# 3. Start the app
npm run dev

Then open the local address shown in your terminal .

Privacy & Safety by Design

Blood donation is a sensitive topic, so safety shaped the product from the start:

Sample data only. All profiles in this prototype are fictional.
No medical claims. RedRoute does not confirm medical eligibility or current availability. Eligibility guidance should always come from a qualified local blood service.
Approval before publishing. Registrations stay private until reviewed.
Minimal public details. Listings show only a display name, blood group, general area and availability.
Not a replacement for hospitals or licensed blood banks. For urgent needs, always contact local emergency or blood services directly.
Design Approach
Warm crimson palette with elegant serif headings for a human, trustworthy feel
Single-page flow: search, registration and guidance in one place
Clear feedback at every step: confirmation messages and helpful empty states
Language that is gentle and respectful, e.g. "No pressure. Just a first step."
Roadmap
Contact verification for donors
Distance-based search and map view
Donor availability reminders
Hospital and blood bank partnerships for verified requests
Multi-language support
