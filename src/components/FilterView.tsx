import { type FC, useState } from 'react';
import { Container, Form } from 'react-bulma-components';
import type { CalendarEvent } from '../types';

export type Props = {
  events: CalendarEvent[];
  setSizeFilter: (values: string[]) => void;
};

export const Component: FC<Props> = ({ events, setSizeFilter }) => {
  const groups = [...new Set(events.map((e) => e.group))];
  const [selectedGroups, setSelectedGroups] = useState<string[]>(groups);

  const changeSelectedGroups = (e: InputEvent) => {
    if (!(e.target instanceof HTMLSelectElement)) {
      return;
    }
    const newGroups = e.target.selectedOptions
      ? Array.from(e.target.selectedOptions).map((o) => o.value)
      : [];
    setSelectedGroups(newGroups);
    setSizeFilter(newGroups);
  };

  return (
    <Container>
      <Form.Field>
        <Form.Label>Event size</Form.Label>
        <Form.Control>
          <Form.Select
            renderAs="select"
            multiple={true}
            value={selectedGroups}
            onChange={changeSelectedGroups}
          >
            {groups.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </Form.Select>
        </Form.Control>
      </Form.Field>
    </Container>
  );
};

export default Component;
