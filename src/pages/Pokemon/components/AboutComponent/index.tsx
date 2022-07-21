import React, { useMemo } from 'react';
import { pokemonDetailTypedSelector } from '~/store/modules/Pokemon/pokemonDetail/reducer';
import { Ability } from '~/store/modules/Pokemon/pokemonDetail/types';
import { capitalize } from '~/utils';
import {
  DescriptionRowComponent,
  LabelComponent,
  GenderComponent,
  SectionComponent,
  TitleComponent,
} from '../';

import { Container, Description } from './styles';

const AboutComponent: React.FC = () => {
  const { pokemon } = pokemonDetailTypedSelector(state => state.pokemonDetail);

  const height = useMemo(() => {
    if (pokemon?.height) {
      return (pokemon.height / 10).toFixed(2);
    }
    return 0;
  }, [pokemon]);

  const weight = useMemo(() => {
    if (pokemon?.weight) {
      return pokemon.weight / 10;
    }
    return 0;
  }, [pokemon]);

  const abilities = useMemo(() => {
    let s = '';
    pokemon?.abilities?.forEach((el: Ability) => {
      if (s.length > 0) {
        s = `${s}, `;
      }
      s = `${s}${capitalize(el.name)}`;
      if (el.isHidden) {
        s = `${s} (hidden)`;
      }
    });
    return s;
  }, [pokemon]);

  const eggGroups = useMemo(() => {
    let s = '';
    pokemon?.eggGroups?.forEach((el: string) => {
      if (s.length > 0) {
        s = `${s}, `;
      }
      s = `${s}${capitalize(el)}`;
    });
    return s;
  }, [pokemon]);

  const hatchTime = useMemo(() => {
    if (pokemon?.hatchCounter) {
      return 255 * (pokemon.hatchCounter + 1);
    }
    return 0;
  }, [pokemon]);

  return (
    <Container>
      <Description>{pokemon?.description}</Description>
      <SectionComponent>
        <DescriptionRowComponent>
          <LabelComponent>Specie</LabelComponent>
          <Description>{pokemon?.specie}</Description>
        </DescriptionRowComponent>
        <DescriptionRowComponent>
          <LabelComponent>Abilities</LabelComponent>
          <Description>{abilities}</Description>
        </DescriptionRowComponent>
        <DescriptionRowComponent>
          <LabelComponent>Catch Hate</LabelComponent>
          <Description>{pokemon?.catchRate}</Description>
        </DescriptionRowComponent>
        <DescriptionRowComponent>
          <LabelComponent>Height</LabelComponent>
          <Description>{height} cm</Description>
        </DescriptionRowComponent>
        <DescriptionRowComponent>
          <LabelComponent>Weight</LabelComponent>
          <Description>{weight} Kg</Description>
        </DescriptionRowComponent>
      </SectionComponent>
      <SectionComponent>
        <TitleComponent>Breeding</TitleComponent>
        <DescriptionRowComponent>
          <LabelComponent>Gender</LabelComponent>
          <GenderComponent genderRate={pokemon?.genderRate} />
        </DescriptionRowComponent>
        <DescriptionRowComponent>
          <LabelComponent>Egg Groups</LabelComponent>
          <Description>{eggGroups}</Description>
        </DescriptionRowComponent>
        <DescriptionRowComponent>
          <LabelComponent>Hatch Time</LabelComponent>
          <Description>{hatchTime} steps</Description>
        </DescriptionRowComponent>
      </SectionComponent>
    </Container>
  );
};

export default AboutComponent;
