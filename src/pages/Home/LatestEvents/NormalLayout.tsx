import Card from 'src/components/Card';
import { events } from './data';

const NormalLayout = () => {
  const headlineEvent = events[0];
  const otherEvents = events.filter((event) => event.id !== headlineEvent.id);
  return (
    <div className="lg:flex gap-[30px] hidden">
      <div>
        <Card variant="vertical" data={headlineEvent} />
      </div>
      <div className="flex flex-col gap-[30px]">
        {
          otherEvents.map((event) => (
            <Card key={event.id} variant="horizontal" data={event} />
          ))
        }
      </div>
    </div>
  );
};

export default NormalLayout;
