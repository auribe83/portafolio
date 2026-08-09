export interface TechGroup {
  category: string
  items: string[]
}

export const technologyGroups: TechGroup[] = [
  {
    category: "Business Intelligence",
    items: ["Power BI", "Tableau", "DAX", "Power Query"],
  },
  {
    category: "Data Analytics",
    items: ["Python", "Pandas", "NumPy", "Jupyter"],
  },
  {
    category: "Bases de Datos",
    items: ["Oracle", "SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    category: "Desarrollo",
    items: ["Oracle APEX", "SQL", "PL/SQL"],
  },
  {
    category: "ETL",
    items: ["Pentaho Data Integration", "Python", "SQL"],
  },
]
