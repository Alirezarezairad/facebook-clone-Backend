
# facebook-clone
### **Überblick über das Facebook-Clone-Backend-Projekt**

---

### **Projektstruktur:**

#### 1. **Verzeichnisstruktur:**
- **Ordner:**
  - `config`: Einstellungen für CORS und erlaubte Ursprünge.
  - `controllers`: Enthält die Logik der Controller (z. B. Benutzer, Posts, Bild-Uploads).
  - `middlewares`: Sicherheits-Middlewares und Bild-Upload-Management.
  - `models`: MongoDB-Modelle für Benutzer und andere Entitäten.
  - `routes`:
    - `api/postRoutes.js`: Routen für Posts.
    - `api/userRoutes.js`: Routen für Benutzer und Authentifizierung.
  - `utilities`: Hilfsmodule wie z. B. der E-Mail-Versand mit Nodemailer.
  - `validators`: Validierungen für Registrierung und Login.
- **Wichtige Dateien:**
  - `server.js`: Hauptdatei für die Serverkonfiguration.
  - `.env`: Enthält sensible Informationen wie Port und Datenbank-URL.

---

#### 2. **Wichtige Details:**

1. **Abhängigkeiten und Pakete:**
   - Hauptpakete: `express`, `mongoose`, `dotenv`, `nodemailer`, `bcrypt`, `jsonwebtoken`.
   - Entwicklungsabhängigkeiten: `nodemon`.

2. **Wichtige Module:**
   - **Benutzerregistrierung und -authentifizierung:**
     - Registrierung mit strikter Validierung von E-Mail und Passwort.
     - Anmeldung und Verwaltung von JWT-Tokens.
     - Versenden von Verifizierungs- und Passwort-Wiederherstellungs-E-Mails.
   - **Bild-Uploads:**
     - Upload von Profil- und Titelbildern mit dem Middleware `imageUpload`.
      -Speicherung der Bilder bei Cloudinary.
   - **Posts:**
     - Erstellung und Abruf von Posts.
     - Verwaltung der Posts eines Benutzers.

3. **Server- und Sicherheitskonfiguration:**
   - Verwaltung von CORS und Beschränkung auf erlaubte Domains.
   - Schutz der Routen mit JWT.
   - Fehlerbehandlung für 404- und 500-Fehler.

4. **Datenbankanbindung:**
   - MongoDB-Connection über `.env`.

---