export default function CollabCheckLists() {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <div className="w-28 h-28 rounded-2xl shadow-lg bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-5xl">✓</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-neutral-900 tracking-tight">
            Collab Check Lists
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Collaborative checklist application - coming soon
          </p>
        </div>

        {/* Project Details */}
        <div className="card p-8 md:p-12 mb-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900">About the Project</h3>
              <p className="text-neutral-700 leading-relaxed text-base">
                Collab Check Lists is a collaborative checklist application that enables teams to work together
                efficiently. More information coming soon.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Features</h3>
              <p className="text-neutral-500 italic">Details to be added...</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-400 border border-neutral-200 cursor-not-allowed">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
