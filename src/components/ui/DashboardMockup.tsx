import { Database, TrendingUp, Activity } from "lucide-react"

const bars = [38, 62, 48, 80, 56, 92, 70]

/**
 * Representación gráfica de un dashboard de BI: no es una captura real,
 * sino una composición estilizada (barras, línea de tendencia, tarjetas
 * de KPI) pensada para el Hero, evitando fotos de stock genéricas.
 */
export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      {/* Tarjeta principal: gráfico de barras + línea de tendencia */}
      <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card-hover">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Panel ejecutivo</p>
            <p className="text-sm font-semibold text-ink-950">Rendimiento mensual</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-accent-500/10 px-2.5 py-1 text-xs font-semibold text-accent-600">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            En vivo
          </span>
        </div>

        <div className="relative flex h-40 items-end gap-2.5 sm:h-48">
          {bars.map((height, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400 opacity-90 transition-all duration-700 ease-out"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 280 160"
            preserveAspectRatio="none"
          >
            <polyline
              points="10,110 50,70 90,95 130,40 170,80 210,20 250,45"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[
              [10, 110],
              [50, 70],
              [90, 95],
              [130, 40],
              [170, 80],
              [210, 20],
              [250, 45],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#0E9488" />
            ))}
          </svg>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span>Ene</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Abr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>

      {/* Tarjeta flotante: KPI de crecimiento */}
      <div className="absolute -left-6 -top-6 hidden w-40 rounded-xl border border-slate-200 bg-white p-4 shadow-card sm:block">
        <div className="flex items-center gap-2 text-accent-600">
          <TrendingUp size={16} />
          <span className="text-xs font-semibold">Tendencia</span>
        </div>
        <p className="mt-1 text-sm font-semibold text-ink-950">Positiva</p>
        <p className="text-[11px] text-slate-400">vs. periodo anterior</p>
      </div>

      {/* Tarjeta flotante: fuentes de datos integradas */}
      <div className="absolute -bottom-6 -right-4 w-44 rounded-xl border border-slate-200 bg-white p-4 shadow-card sm:-right-8">
        <div className="flex items-center gap-2 text-brand-600">
          <Database size={16} />
          <span className="text-xs font-semibold">Fuentes integradas</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          {["Oracle", "SQL", "CSV", "API"].map((src) => (
            <span
              key={src}
              className="rounded bg-slate-50 px-1.5 py-1 text-[10px] font-medium text-slate-500"
            >
              {src}
            </span>
          ))}
        </div>
      </div>

      {/* Tarjeta flotante: estado del proceso ETL */}
      <div className="absolute -right-2 top-1/3 hidden w-36 -translate-y-1/2 rounded-xl border border-slate-200 bg-white p-3 shadow-card md:block">
        <div className="flex items-center gap-2 text-slate-500">
          <Activity size={14} />
          <span className="text-[11px] font-semibold">Proceso ETL</span>
        </div>
        <p className="mt-1 text-[11px] font-medium text-accent-600">Sincronizado</p>
      </div>
    </div>
  )
}
