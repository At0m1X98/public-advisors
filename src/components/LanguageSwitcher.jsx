import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      className=' bg-primary text-white border border-white rounded px-2 py-1'
      value={i18n.language}
      onChange={changeLanguage}
      aria-label="Select Language"
    >
      <option value="cs">Cz</option>
      <option value="en">En</option>
      <option value="uk">Ук</option>
    </select>
  );
}