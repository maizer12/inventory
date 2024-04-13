import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useTitle = (initialTitle: string) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const htmlTitle = document.querySelector('title');
    if (htmlTitle) {
      const updateTitle = () => {
        htmlTitle.innerText = t(initialTitle);
      };

      updateTitle();
    }
  }, [i18n.language, t, initialTitle]);
};
