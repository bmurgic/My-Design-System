import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow><TableCell>Alex</TableCell><TableCell>Designer</TableCell></TableRow>
  </TableBody>
</Table>`

const ROWS = [
  { name: 'Alex Kim', role: 'Designer', status: 'Active' },
  { name: 'Sam Park', role: 'Engineer', status: 'Active' },
  { name: 'Jordan Lee', role: 'PM', status: 'Away' },
]

export function TableSection() {
  return (
    <ComponentSection
      slug="table"
      category="Display"
      label="Table"
      description="Tabular data. Header cells use scope='col' for screen readers."
      code={CODE}
    >
      <div style={{ width: '100%', maxWidth: '560px' }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map(row => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ComponentSection>
  )
}
