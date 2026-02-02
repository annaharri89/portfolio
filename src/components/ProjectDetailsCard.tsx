import { ReactNode } from 'react'

interface ProjectDetailsCardProps {
  about: string
  features?: ReactNode
  tags?: ReactNode
  tagsHeader?: string
}

export default function ProjectDetailsCard({ about, features, tags, tagsHeader }: ProjectDetailsCardProps) {
  return (
    <div className="card mb-12" style={{ padding: 'var(--spacing-lg)' }}>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-neutral-900">About the Project</h3>
          <p className="text-neutral-700 leading-relaxed text-base">{about}</p>
        </div>

        {features && (
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Features</h3>
            {features}
          </div>
        )}

        {tags && (
          <div>
            {tagsHeader && <h3 className="text-2xl font-semibold mb-4 text-neutral-900">{tagsHeader}</h3>}
            <div className="flex flex-wrap gap-3 pt-2">{tags}</div>
          </div>
        )}
      </div>
    </div>
  )
}
