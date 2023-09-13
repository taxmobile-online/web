const usePageTitle = (title: string) => {
  document.title = `Taxmobile | ${title}`;
  return null;
};

export default usePageTitle;
