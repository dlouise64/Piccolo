import React, { Fragment } from 'react';
import Paragraph from '../elements/Paragraph';
import Container from '../elements/Container';
import Section from '../elements/Section';
import { H2 } from '../elements/Headings';
import Grid, { Column } from '../elements/Grid';
import MadLib from '../components/Madlib';
import { IconCircle } from '../elements/Icon';
import List, { Item } from '../elements/List';
import countries from '../data/countries';

export const SectionOne = () => <Section light>
  <Container>
    <Paragraph small>
      Welcome to the Legislation as Code demonstrator.
    </Paragraph>
    <Paragraph small>
      There are many rules about how we do things around the world. Some of these are coded into law, such as voting ages, tax rates, and access to services. Sometimes these rules can be really complicated for a human to sit down and work out, but really easy for a machine to do.</Paragraph>

    <Paragraph small>
      Legislation as code is when we turn those rules into things machines can use so they can work things out for us.
    </Paragraph>

  </Container>
</Section>;

const EligibleHeader = props => <Paragraph medium adjust>
  You are eligible for a pension at age <span>{props.age}</span>
</Paragraph>;

export const SectionThree = props => <div style={{ display: props.show }}><Section light>
  <Container>
    <MadLib
      values={props.values}
    />
  </Container>
</Section></div>;

export const SectionFour = props => <div style={{ display: props.show }}><Section dark>
  <Container>
    <Paragraph style={{ color: '#fff', textAlign: 'center' }}>
      Based on the information you entered, here is your eligibility for government pensions if you were applying in one of the following countries.
    </Paragraph>
  </Container>
</Section></div>;

export class SectionFive extends React.Component {
  render() {
    return (
      <Section light>
        <Container>
          <Grid>
            {countries.map(country => <Column>
              <H2>{country.name}</H2>
              <Eligibility
                country={country.label}
                age={this.props[country.label].data.persons.Tahi[country.eligible_key]}
              />
              <Paragraph>{country.subtitle}</Paragraph>
              <List>
                {country.eligibility_list.map(item => <Item>{item}</Item>)}
              </List>
            </Column>)}
          </Grid>
        </Container>
      </Section>
    );
  }
}

class Eligibility extends React.Component {
  render() {
    let results_age;
    if (this.props.country === 'new_zealand') {
      results_age = this.props.age['2018-08'];
    } else {
      results_age = this.props.age['2018-01'];
    }
    return <Fragment>
      <EligibleHeader age={results_age} />
      <IconCircle value={results_age} />
    </Fragment>;
  }
}