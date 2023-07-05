const mapping: Record<string, string> = {
  accidents: 'accident',
  companies: 'company',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
