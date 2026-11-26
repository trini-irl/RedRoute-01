const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const AVAILABILITY = ["Available", "Weekends only", "Evenings only", "Not available now"];
const DONOR_STATUSES = ["pending", "active", "rejected", "inactive"];
const REQUEST_STATUSES = ["pending", "contacted", "fulfilled", "closed"];

function cleanText(value, maxLength = 120) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isPinCode(value) {
  return typeof value === "string" && /^[1-9][0-9]{5}$/.test(value.trim());
}

module.exports = {
  BLOOD_GROUPS,
  AVAILABILITY,
  DONOR_STATUSES,
  REQUEST_STATUSES,
  cleanText,
  isPinCode,
};
