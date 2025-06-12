const { google } = require("googleapis");
const path = require("path");

const GOOGLE_SHEETS_ID = "1oYFrisUPMcxoUvu2EtdJtfVqY-wvpEH58O11q3nAgxY";

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(
    __dirname,
    "..",
    "..",
    "credentials",
    "service-account.json"
  ), // safer path
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

/*
const data = [
  {
    tag: "บ้านและสวน",
    users: [
      {
        id: 1,
        username: "ramtarnranscape_garden",
        avatar: "https://...jpeg",
        tiktok_src: "https://www.tiktok.com/@ramtarnranscape_garden",
        created_at: "2025-05-08T07:10:00.803Z",
        updated_at: "2025-05-29T07:42:21.881Z",
        followers: "5617",
        following: "298",
        likes: "90K",
      },
      // ... other users ...
    ],
  },
  {
    tag: "บ้านหรู",
    users: [
      {
        id: 214,
        username: "wasin8787",
        avatar: "https://...jpeg",
        tiktok_src: "https://www.tiktok.com/@wasin8787",
        created_at: "2025-05-08T09:26:31.054Z",
        updated_at: "2025-05-13T10:19:51.924Z",
        followers: null,
        following: null,
        likes: null,
      },
      // ... other users ...
    ],
  },
];
*/

function formatDateTime() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}-${minutes}`; // use - instead of : for Google Sheets safety
}

module.exports.exportToGoogleSheet = async (data) => {
  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });

    const formattedDate = formatDateTime();
    const sheetName = formattedDate;

    // Add new sheet
    await googleSheets.spreadsheets.batchUpdate({
      spreadsheetId: GOOGLE_SHEETS_ID,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: sheetName,
              },
            },
          },
        ],
      },
    });

    const rows = [["username", "tiktok_src", "followers", "tag"]];

    data.forEach((group) => {
      group.users.forEach((user) => {
        rows.push([
          user.username,
          user.tiktok_src,
          user.followers || "", // handle nulls
          group.tag,
        ]);
      });
    });

    // Write all rows
    await googleSheets.spreadsheets.values.update({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: `${sheetName}!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: rows,
      },
    });

    console.log(`✅ Exported to Google Sheet tab: ${sheetName}`);
  } catch (error) {
    console.error("❌ Failed to export to Google Sheets:", error.message);
    throw error;
  }
};
