import React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'

export default function Educations() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    if (activeStep === 3) {
      return
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div
      className="max-w-[600px] w-full  my-4"
      style={{
        color: colorTheme.primaryText,
      }}
    >
      <h1 className="text-center text-4xl font-bold">My Educations</h1>
      <Box
        sx={{
          maxWidth: '100%',
          margin: '2rem 0',
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel className="">
              <Typography
                variant="caption"
                sx={{ color: colorTheme.primaryText }}
              >
                Saraswati Shishu Vidhya Mandir, Hazaribagh, Jharkhand
              </Typography>
            </StepLabel>
            <StepContent>
              <p className="text-lg">
                I completed my secondary education from Saraswati Shishu Vidya
                Mandir in 2019 with an overall score of 80%.{' '}
              </p>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {activeStep == 2 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={activeStep == 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step>
            <StepLabel sx={{ color: colorTheme.primaryText }}>
              <Typography
                variant="caption"
                sx={{ color: colorTheme.primaryText }}
              >
                Saraswati Shishu Vidhya Mandir, Hazaribagh, Jharkhand{' '}
              </Typography>
            </StepLabel>
            <StepContent>
              <p className="text-lg">
                I completed my higher secondary education from Saraswati Shishu
                Vidya Mandir in 2021 with a score of 75%.
                <br />
                <br />I pursued the Science stream with Physics, Chemistry,
                Mathematics, and Computer Science as my core subjects. I studied
                there for two years, from 2019 to 2021.
              </p>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {activeStep == 2 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={activeStep == 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step>
            <StepLabel sx={{ color: colorTheme.primaryText }}>
              <Typography
                variant="caption"
                sx={{ color: colorTheme.primaryText }}
              >
                Lovely Professional University, Jalandhar, Punjab{' '}
              </Typography>
            </StepLabel>
            <StepContent>
              <p className="text-lg">
                I’m currently pursuing my B.Tech degree at Lovely Professional
                University, and I'm in my third year.
              </p>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {activeStep == 2 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={activeStep == 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        </Stepper>
        {activeStep === 3 && (
          <Paper
            square
            elevation={0}
            sx={{
              p: 2,
              bgcolor: colorTheme.primaryBg,
            }}
          >
            <Button variant="outlined" onClick={handleReset}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  )
}
