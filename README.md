### 1️⃣ Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (Recommended: v18+)
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/) (Optional, you can use `npm` instead)

### 2️⃣ Clone the Repository

```sh
git clone https://github.com/mejokkurian/mitsogo
cd mitsogo
```

### 3️⃣ Install Dependencies

Using npm:

```sh
npm install
```

Or using Yarn:

```sh
yarn install
```

### 4️⃣ Environment Variables

Create a `.env.local` file in the root directory and add necessary environment variables as per the project requirements.

Example:

```sh
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

### 5️⃣ Run the Development Server

```sh
npm run dev
```

Or using Yarn:

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the project.

### 6️⃣ Build for Production

To generate an optimized production build:

```sh
npm run build
npm start
```

Or using Yarn:

```sh
yarn build
yarn start
```
