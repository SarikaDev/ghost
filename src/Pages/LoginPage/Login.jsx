/* eslint-disable react/button-has-type */
import React, { useCallback, useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Button, ButtonBase } from "@mui/material";

const languages = [
  {
    code: "fr",
    name: "Francais",
    country: "fr",
  },
  {
    code: "en",
    name: "English",
    country: "gb",
  },
];
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: true,
    },
  });
const Login = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Login;
