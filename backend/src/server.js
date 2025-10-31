import { createApp } from "./app.js"

const PORT = process.env.PORT || 5000;

createApp().then((app) => {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
});
