import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { sendContactMail } from '../../lib/mail-api'
import { useState } from 'react'

import Radio from '@material-ui/core/Radio'
import RadioGroup, { useRadioGroup } from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'

export default function ContactForm({ onSubmit }) {
  const [isInterestedInAppointment, setIsInteresstedInAppointment] = useState(
    null
  )
  const { register, handleSubmit, watch, errors, control } = useForm()
  const noPrediction = watch('noPrediction', false) // you can supply default value as second argument

  async function sendThisShit(data) {
    const { email, nachricht, name, telefon, adresse, betreff } = data
    console.log(data)
    const res = await sendContactMail(
      'pagelsmartin@gmx.de',
      name,
      'pagelsmartin@gmx.de',
      nachricht,
      telefon,
      adresse,
      betreff
    )
    if (res.status < 300) {
      onSubmit()
    }
  }

  function handleIHaveAQuestion() {
    setIsInteresstedInAppointment(false)
    setWhatPrediction(null)
  }
  function handleIWantAAppointment() {
    setIsInteresstedInAppointment(true)
  }

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup()
    return <FormControlLabel {...props} />
  }

  const [whatPrediction, setWhatPrediction] = useState(null)

  const predictions = [
    'Krankengymnastik',
    'Manuelle Therapie',
    'Manuelle Lymphdrainage 30 Minuten',
    'Manuelle Lymphdrainage 45 Minuten',
    'Manuelle Lymphdrainage 60 Minuten',
    'Klassische Massagetherapie',
    'Bindegewebsmassage',
  ]
  const additionalPredictions = [
    'Wärmetherapie (Heissluft/Rotlicht/Infrarot)',
    'Warmpackungen (Fango/Moor)',
    'Heisse Rolle',
    'Kältetherapie',
  ]
  return (
    <FormWrapper onSubmit={handleSubmit(sendThisShit)}>
      <AppointmentButtonWrapper>
        <AppointmentButton
          type="button"
          isActive={
            !isInterestedInAppointment && isInterestedInAppointment !== null
          }
          onClick={handleIHaveAQuestion}
        >
          Ich habe eine Frage
        </AppointmentButton>
        <AppointmentButton
          isActive={isInterestedInAppointment}
          type="button"
          onClick={handleIWantAAppointment}
        >
          Ich interessiere mich für einen Termin
        </AppointmentButton>
      </AppointmentButtonWrapper>
      <>
        {isInterestedInAppointment && (
          <>
            <FormControl
              component="fieldset"
              style={{ width: '100%', margin: '10px' }}
            >
              <FormLabel component="legend">
                <strong>Ich habe:</strong>
              </FormLabel>
              <Controller
                rules={{ required: true }}
                control={control}
                name="iWantAppointmentAndIHave"
                as={
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    style={{ alignContent: 'space-between', width: '100%' }}
                  >
                    <MyFormControlLabel
                      value="noPrediction"
                      control={<Radio color="primary" />}
                      label="Keine Verordnung"
                      labelPlacement="bottom"
                      onClick={() => setWhatPrediction('noPrediction')}
                    />
                    <MyFormControlLabel
                      value="lawPrediction"
                      control={<Radio color="primary" />}
                      label="Eine gesetzliche Verordnung"
                      labelPlacement="bottom"
                      onClick={() => setWhatPrediction('lawPrediction')}
                    />
                    <MyFormControlLabel
                      value="privatePrediction"
                      control={<Radio color="primary" />}
                      label="Eine private Verordnung"
                      labelPlacement="bottom"
                      onClick={() => setWhatPrediction('privatePrediction')}
                    />
                    <MyFormControlLabel
                      value="otherQuestion"
                      control={<Radio color="primary" />}
                      label="Ein anderes Anliegen"
                      labelPlacement="bottom"
                      onClick={() => setWhatPrediction(null)}
                    />
                  </RadioGroup>
                }
              />
            </FormControl>
            {whatPrediction && (
              <>
                <FormControl component="fieldset" style={{ margin: '10px' }}>
                  <FormLabel component="legend" style={{ margin: '10px 0' }}>
                    <strong>
                      {whatPrediction !== 'noPrediction'
                        ? 'Mir wurde verschrieben:'
                        : 'Ich interessiere mich für:'}
                    </strong>
                  </FormLabel>

                  <FormGroup aria-label="position" column>
                    {predictions.map((prediction) => (
                      <FormControlLabel
                        key={prediction}
                        value={prediction}
                        control={<Checkbox color="primary" />}
                        label={prediction}
                        labelPlacement="end"
                        name={prediction}
                        inputRef={register}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
                <FormControl component="fieldset" style={{ margin: '10px' }}>
                  <FormLabel component="legend" style={{ margin: '10px 0' }}>
                    <strong>Ergänzende Heilmittel:</strong>
                  </FormLabel>
                  <FormGroup aria-label="position" column>
                    {additionalPredictions.map((additionalPrediction) => (
                      <FormControlLabel
                        key={additionalPrediction}
                        value={additionalPrediction}
                        control={<Checkbox color="primary" />}
                        label={additionalPrediction}
                        labelPlacement="end"
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </>
            )}
          </>
        )}
        <InputWrapper>
          <Label name="name" htmlFor="name">
            Name:<Required>*</Required>
          </Label>
          <Input
            name="name"
            id="name"
            placeholder="Ihr Vor- und Nachname"
            ref={register({ required: true })}
          ></Input>
          {errors.name && (
            <ErrorMessage>Bitte füllen Sie dieses Feld aus!</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="telefon">
            Telefon:<Required>*</Required>
          </Label>
          <Input
            name="telefon"
            type="tel"
            id="telefon"
            isSmall={true}
            placeholder="Telefonnummer unter der wir Sie am schnellsten erreichen können"
            ref={register({ required: true })}
          ></Input>
          {errors.telefon && (
            <ErrorMessage>Bitte füllen Sie dieses Feld aus!</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">
            Email:<Required>*</Required>
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="maxmustermann@email.de"
            ref={register({ required: true })}
          ></Input>
          {errors.email && (
            <ErrorMessage>Bitte füllen Sie dieses Feld aus!</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="adresse">Adresse:</Label>
          <Input
            id="adresse"
            name="adresse"
            placeholder="Musterstraße 1, 12345, Musterstadt"
            ref={register()}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="betreff">Betreff:</Label>
          <Input
            id="betreff"
            name="betreff"
            placeholder="Worum geht es?"
            ref={register()}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nachricht">
            Nachricht:<Required>*</Required>
          </Label>
          <TextArea
            name="nachricht"
            id="nachricht"
            placeholder="Geben Sie hier so viele Informationen wie möglich ein!"
            ref={register({ required: true })}
          ></TextArea>
          {errors.nachricht && (
            <ErrorMessage>Bitte füllen Sie dieses Feld aus!</ErrorMessage>
          )}
        </InputWrapper>
        <SubmitButton type="submit" value="NACHRICHT ABSCHICKEN" />{' '}
      </>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  margin: 20px 20px;
  padding: 0 20px;
  width: 100%;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`

const Input = styled.input`
  border-radius: 5px;
  border: solid 1px var(--form-border-color);
  background-color: var(--form-input-background-color);
  color: var(--font-color-darkgrey);
  padding: 10px;
  font-size: 1em;
  height: 45px;

  &::placeholder {
    ${({ isSmall }) => isSmall && 'font-size: 0.5em;'}
    color: var(--form-border-color);
    font-family: 'NL-normal';
  }
`

const TextArea = styled.textarea`
  border-radius: 5px;
  border: solid 1px var(--form-border-color);
  background-color: var(--form-input-background-color);
  color: var(--font-color-darkgrey);
  padding: 10px;
  font-size: 1em;
  resize: vertical;
  min-height: 200px;
  font-family: 'NL-normal';
  &::placeholder {
    color: var(--form-border-color);
    font-family: 'NL-normal';
  }
`

const SubmitButton = styled.input`
  width: 100%;
  background-color: var(--font-color-blue);
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 10px;
  padding: 15px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  font-family: 'NL-normal';
`

const Required = styled.span`
  font-weight: 400;
  font-size: 0.8em;
`

const ErrorMessage = styled.span`
  color: var(--form-error-color);
  font-size: 0.5em;
`
const PredictionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const AppointmentButton = styled.button`
  all: unset;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.isActive && 'var(--font-color-blue)'};
  color: ${(props) => (props.isActive ? 'white' : 'var(--font-color-blue)')};
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 10px;
  padding: 15px;
  border: solid 1px var(--font-color-blue);
  cursor: pointer;
  margin: 0 20px 20px;
`
const AppointmentButtonWrapper = styled.div`
  display: flex;
`
const StyledCheckbox = styled.input`
  all: unset;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.isActive && 'var(--font-color-blue)'};
  color: ${(props) => (props.isActive ? 'white' : 'var(--font-color-blue)')};
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 10px;
  padding: 15px;
  border: solid 1px var(--font-color-blue);
  cursor: pointer;
  margin: 0 20px 20px;
`

const RadioGroupWrapper = styled(RadioGroup)``
