import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { sendContactMail } from '../../lib/mail-api'
import { useState } from 'react'

export default function ContactForm({ onSubmit }) {
  const [isInterestedInAppointment, setIsInteresstedInAppointment] = useState(
    null
  )
  const { register, handleSubmit, watch, errors } = useForm()
  const noPrediction = watch('noPrediction', false) // you can supply default value as second argument
  console.log(
    '🚀 ~ file: ContactForm.js ~ line 12 ~ ContactForm ~ noPrediction',
    noPrediction
  )
  async function sendThisShit(data) {
    const { email, nachricht, name, telefon, adresse, betreff } = data
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
  }
  function handleIWantAAppointment() {
    setIsInteresstedInAppointment(true)
  }

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
          <InputWrapper>
            <p>Ich habe:</p>
            <StyledCheckbox
              type="radio"
              id="noPrediction"
              name="prediction"
              ref={register}
            />
            <Label for="noPrediction" value="Keine Verordnung">
              Keine
            </Label>
            <input type="radio" name="socialPrediction" ref={register} />
            <input type="radio" name="privatePrediction" ref={register} />
          </InputWrapper>
        )}
        <InputWrapper>
          <Label name="name" for="name">
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
          <Label for="telefon">
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
          <Label for="email">
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
          <Label for="adresse">Adresse:</Label>
          <Input
            id="adresse"
            name="adresse"
            placeholder="Musterstraße 1, 12345, Musterstadt"
            ref={register()}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label for="betreff">Betreff:</Label>
          <Input
            id="betreff"
            name="betreff"
            placeholder="Worum geht es?"
            ref={register()}
          ></Input>
        </InputWrapper>
        <InputWrapper>
          <Label for="nachricht">
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
  font-family: 'Open Sans';
  font-size: 1em;
  height: 45px;

  &::placeholder {
    ${({ isSmall }) => isSmall && 'font-size: 0.5em;'}
    color: var(--form-border-color);
  }
`

const TextArea = styled.textarea`
  border-radius: 5px;
  border: solid 1px var(--form-border-color);
  background-color: var(--form-input-background-color);
  color: var(--font-color-darkgrey);
  padding: 10px;
  font-family: 'Open Sans';
  font-size: 1em;
  resize: vertical;
  min-height: 200px;
  &::placeholder {
    color: var(--form-border-color);
  }
`

const SubmitButton = styled.input`
  width: 100%;
  background-color: var(--font-color-blue);
  color: white;
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 10px;
  padding: 15px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
`

const Required = styled.span`
  font-weight: 400;
  font-size: 0.8em;
`

const ErrorMessage = styled.span`
  color: var(--form-error-color);
  font-size: 0.5em;
`

const AppointmentButton = styled.button`
  all: unset;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.isActive && 'var(--font-color-blue)'};
  color: ${(props) => (props.isActive ? 'white' : 'var(--font-color-blue)')};
  font-family: 'Open Sans';
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
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 10px;
  padding: 15px;
  border: solid 1px var(--font-color-blue);
  cursor: pointer;
  margin: 0 20px 20px;
`
