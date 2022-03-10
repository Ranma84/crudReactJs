import { useTranslation } from "i18n";

const currentDate = new Date();

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <>
      <div className="dark:text-gray-200 text-gray-700">
        <div className="px-5 py-3 mx-auto flex items-start sm:items-center sm:flex-row flex-col">
          <p className="text-sm sm:py-2 sm:mt-0 mt-4">
            &copy; {currentDate.getFullYear()} {t("tagline")} — Tailwind Admin
            Kit
          </p>
          <span className="inline-flex sm:ltr:ml-auto sm:rtl:mr-auto sm:mt-0 mt-4 justify-start">
            <a className="text-gray-700">{t("about")}</a>
            <a className="text-gray-700 ltr:ml-3 rtl:mr-3">{t("team")}</a>
            <a className="text-gray-700 ltr:ml-3 rtl:mr-3">{t("contact")}</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
