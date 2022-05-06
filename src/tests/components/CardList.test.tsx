import { Card } from '@/components/Card/Card'
import { CardList } from '@/components/CardList/CardList'
import { render } from '@testing-library/react'

describe('CardList component tests', () => {
  it('should be able to return correct children', () => {
    const { getByRole } = render(
      <CardList>
        <Card
          taskName="mocked-task-name"
          taskDescription="mocked-task-name"
          onOpenModal={() => {}}
        />
      </CardList>
    );

    const taskName = getByRole('heading', { name: /mocked\-task\-name/i });

    expect(taskName).toBeInTheDocument();
  })
})