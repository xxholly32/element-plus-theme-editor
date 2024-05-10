export function changeThemeByCssvars(cssVars: Record<string, string>) {
  for (const key in cssVars)
    document.documentElement.style.setProperty(key, cssVars[key])
}
