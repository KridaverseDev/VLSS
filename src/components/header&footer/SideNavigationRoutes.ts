interface NavigationItem {
  label: string;
  path?: string;
  dropdown?: { label: string; path: string }[];
}

export const signedInSideNavigationItems: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Veerashaiva Lingayatha",
    path: "/veerashaiva",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Events",
    path: "/Events",
  },
  {
    label: "Leaders",
    path: "/leaders",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Report",
    path: "/report",
  },
  {
    label: "Form",
    path: "/form",
  },
];
