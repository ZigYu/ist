import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Animate, { Appear, createPosed } from '../../Animate';
import Interactive from '../../interactive/Interactive';
import InteractiveDrag from '../../interactive/InteractiveDrag';
import InteractiveDropZone from '../../interactive/InteractiveDropZone';
import House from './House';
import colors from '../../../constants/colors';
import styles from './LessonColorHouses.css';
import WorkArea from '../../WorkArea';
import CardImage from '../../cards/CardImage';
import ButtonNext from '../../ui/ButtonNext';
import { wait } from '../../../utils';
import { sound } from '../../../utils/sounds';

const PictureBox = createPosed({
  enter: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -500
  }
});

const RoofBox = createPosed({
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ i }) => i * 100
  },
  exit: {
    opacity: 0,
    y: -200
  },
  disappear: {
    opacity: 0,
    transition: { duration: 0 }
  }
});

const HouseBox = createPosed({
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ i }) => i * 100
  },
  exit: {
    opacity: 0,
    y: 200
  }
});

export default class LessonColorHouses extends Component {
  state = { indexCardIds: -1 };

  componentDidMount() {
    this.initializeLesson();
    this._isMounted = true;
  }

  componentDidUpdate(prevProps) {
    const { cards } = this.props;
    if (prevProps.cards !== cards) this.initializeLesson();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getCardIds = () => {
    const { cards } = this.props;
    return _.chain(cards)
      .map('cardId')
      .shuffle()
      .value();
  };

  initializeLesson = () => {
    this.setState(
      {
        cardIds: this.getCardIds(),
        indexCardIds: -1,
        successMap: {}
      },
      this.goNextRound
    );
  };

  goNextRound = async (ops = {}) => {
    const { isWait } = ops;
    const { cards } = this.props;
    const { cardIds } = this.state;
    let { indexCardIds } = this.state;

    if (cardIds.length === 0) return;

    this.setState({
      isShowImage: true,
      isShowButtonNext: false
    });

    if (isWait) await wait(2000);

    indexCardIds += 1;
    if (indexCardIds > cardIds.length - 1) indexCardIds = 0;
    const currentCardId = cardIds[indexCardIds];
    const wordArray = cards[currentCardId].word
      .split('')
      .map((letter, i) => ({ letter, letterId: i }));

    if (this._isMounted)
      this.setState({
        currentCardId,
        indexCardIds,
        wordArray,
        wordArrayShuffled: _.shuffle(wordArray),
        colors: _.shuffle(colors),
        isShowImage: false,
        isEndRound: false,
        successMap: {}
      });
  };

  onDrop = async ({ dragId, dropId }) => {
    const { successMap, wordArray } = this.state;

    if (dragId === dropId) {
      const newSuccessMap = { ...successMap, [dragId]: true };
      this.setState({ successMap: newSuccessMap });
      sound.play('put');

      if (_.values(newSuccessMap).length === wordArray.length) {
        sound.play('success');
        this.setState({
          isEndRound: true,
          isShowButtonNext: true
        });
      }
    } else {
      sound.play('denied');
    }
  };

  render() {
    const { cards } = this.props;
    const {
      currentCardId,
      isEndRound,
      isShowImage,
      isShowButtonNext
    } = this.state;

    if (_.isEmpty(cards))
      return (
        <div className={styles.singleMessage}>нет подходящих карточек</div>
      );

    return (
      <WorkArea backgroundImage="lessonColorHouses">
        <Interactive onDrop={this.onDrop}>
          <div className={styles.lesson}>
            <Animate>
              {isShowButtonNext ? (
                <Appear key="ButtonNext" className={styles.buttonContainer}>
                  <div className={styles.buttonNext}>
                    <ButtonNext
                      onClick={() => this.goNextRound({ isWait: true })}
                    />
                  </div>
                </Appear>
              ) : null}
              {isShowImage && isEndRound ? (
                <PictureBox key={currentCardId} className={styles.image}>
                  <CardImage image={cards[currentCardId].image} />
                </PictureBox>
              ) : null}
            </Animate>

            <div className={styles.container}>
              <Roofs {...this.state} />
            </div>

            <div className={styles.container}>
              <Houses {...this.state} />
            </div>
          </div>
        </Interactive>
      </WorkArea>
    );
  }
}

LessonColorHouses.propTypes = {
  cards: PropTypes.objectOf(PropTypes.object).isRequired
};

const Roofs = ({ successMap, indexCardIds, wordArrayShuffled }) => (
  <Animate>
    {_.map(wordArrayShuffled, ({ letter, letterId }, i) => {
      const id = String(indexCardIds) + letterId;
      const isSuccess = !!successMap[id];

      return (
        <RoofBox
          i={i}
          key={id}
          className={styles.house}
          pose={isSuccess ? 'disappear' : 'initial'}
        >
          <InteractiveDrag dragId={id}>
            {!isSuccess ? (
              <div className={styles.letterRoof}>{letter}</div>
            ) : null}
            <House hideCorpus hideRoof={false} color={colors[letterId]} />
          </InteractiveDrag>
        </RoofBox>
      );
    })}
  </Animate>
);

Roofs.propTypes = {
  indexCardIds: PropTypes.number.isRequired,
  successMap: PropTypes.objectOf(PropTypes.bool),
  wordArrayShuffled: PropTypes.arrayOf(PropTypes.object)
};

Roofs.defaultProps = {
  successMap: {},
  wordArrayShuffled: []
};

const Houses = ({ successMap, indexCardIds, wordArray }) => (
  <Animate>
    {_.map(wordArray, ({ letter, letterId }, i) => {
      const id = String(indexCardIds) + letterId;
      const isSuccess = !!successMap[id];
      return (
        <HouseBox i={i} key={id} className={styles.house}>
          <InteractiveDropZone dropId={id}>
            {isSuccess ? (
              <div className={styles.letterHouse}>{letter}</div>
            ) : null}
            <House
              pose={isSuccess ? 'roofInstalled' : 'initial'}
              hideRoof={!isSuccess}
              color={colors[letterId]}
            />
          </InteractiveDropZone>
        </HouseBox>
      );
    })}
  </Animate>
);

Houses.propTypes = {
  indexCardIds: PropTypes.number.isRequired,
  successMap: PropTypes.objectOf(PropTypes.bool),
  wordArray: PropTypes.arrayOf(PropTypes.object)
};

Houses.defaultProps = {
  successMap: {},
  wordArray: []
};
