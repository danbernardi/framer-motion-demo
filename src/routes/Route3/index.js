import FadeInFromBelow from '../TransitionElements/FadeInFromBelow';

export default function Route2 () {
  const text = [
    'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor.',
    'Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    'Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.'
  ];

  const offset = 0.25;

  return (
    <div className="page">
      <FadeInFromBelow index={ 0 } delayOffset={ offset }>
        <h1>Route 3</h1>
      </FadeInFromBelow>

      { text.map((item, index) => (
        <FadeInFromBelow key={ index } index={ index + 1 } delayOffset={ offset }>
          <p>{ item }</p>
        </FadeInFromBelow>
      )) }
    </div>
  )
};
