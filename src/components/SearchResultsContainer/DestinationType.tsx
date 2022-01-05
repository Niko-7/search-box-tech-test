import React, { useEffect, useState } from 'react';

export const DestinationType: React.FC<{ destinationKind: string }> = ({
  destinationKind,
}) => {
  const [destination, setDestination] = useState<string>('');
  const [destinationKindClass, setDestinationKindClass] = useState<string>('');

  useEffect(() => {
    if (destinationKind.startsWith('C')) {
      setDestination('City');
      setDestinationKindClass('default-destination-style');
    } else if (destinationKind.startsWith('A')) {
      setDestination('Airport');
      setDestinationKindClass('orange-destination-style');
    } else {
      setDestination('Station');
      setDestinationKindClass('blue-destination-style');
    }
  }, [destinationKind]);

  return (
    <div className={`search-results__location-type ${destinationKindClass}`}>
      <span>{destination}</span>
    </div>
  );
};
