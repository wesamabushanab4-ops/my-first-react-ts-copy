import { useState } from 'react'
import {
  Alert, AppBar, Box, Button, Card, CardContent, Chip, Container,
  Divider, IconButton, Paper, Stack, TextField, Toolbar, Tooltip, Typography,
} from '@mui/material'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SendIcon from '@mui/icons-material/Send'
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt'

const lessons = [
  { label: 'Button', detail: 'Actions with variants and props', icon: <SendIcon /> },
  { label: 'Typography', detail: 'A consistent type scale', icon: <CodeRoundedIcon /> },
  { label: 'Box + Stack', detail: 'Layout with the sx prop', icon: <ViewQuiltIcon /> },
  { label: 'Card + Alert', detail: 'Structured content and feedback', icon: <CheckCircleRoundedIcon /> },
]

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  function increment() {
    setCount(count + 1)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedName(name.trim())
  }

  function handleClick() {
    alert('Hello')
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fb', color: '#172033' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#172033' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 } }}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <AutoAwesomeRoundedIcon sx={{ color: '#f2b84b' }} />
            <Typography variant="h6" sx={{ fontWeight: 800 }}>MUI Workshop</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Chip label="React + MUI" size="small" sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,.12)' }} />
            <Tooltip title="Menu"><IconButton aria-label="Open menu" sx={{ color: '#fff', display: { xs: 'inline-flex', md: 'none' } }}><MenuRoundedIcon /></IconButton></Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 9 } }}>
        <Box sx={{ maxWidth: 760, mb: 6 }}>
          <Typography variant="overline" sx={{ color: '#bd6b2d', fontWeight: 800, letterSpacing: '.14em' }}>Lesson 09 / Component systems</Typography>
          <Typography variant="h1" sx={{ mt: 1, mb: 2, fontSize: { xs: '3rem', md: '5.4rem' }, lineHeight: .96, fontWeight: 900, letterSpacing: '-.06em' }}>Build faster with Material UI.</Typography>
          <Typography variant="h5" sx={{ color: '#647084', fontWeight: 400, lineHeight: 1.5 }}>Ready-made React components, expressive props, and the <code>sx</code> prop for precise styling.</Typography>
        </Box>

        <Card sx={{ mb: 3, borderRadius: 3 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="overline" color="primary" fontWeight={800}>First component</Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>The first button</Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              <code>Button</code> starts with a capital letter because it is a React component.
            </Typography>
            <Button variant="contained" onClick={handleClick}>Click Me</Button>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3, borderRadius: 3 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="overline" color="primary" fontWeight={800}>02 / Button variants</Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>Three buttons</Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>The same Button component can look different using the variant prop.</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }}>
              <Button variant="contained">Login</Button>
              <Button variant="outlined">Register</Button>
              <Button variant="text">Cancel</Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3, borderRadius: 3 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="overline" color="primary" fontWeight={800}>03 / Color props</Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>One prop, six tones</Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>Use the <code>color</code> prop to communicate the purpose of an action.</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained" color="primary">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" color="success">Save</Button>
              <Button variant="contained" color="error">Delete</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="info">Info</Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3, borderRadius: 3 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="overline" color="primary" fontWeight={800}>04 / Semantic actions</Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>Button colors</Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>Choose a color that matches the meaning of each action.</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }}>
              <Button variant="contained" color="success">Save</Button>
              <Button variant="contained" color="error">Delete</Button>
              <Button variant="contained" color="primary">Edit</Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3, borderRadius: 3 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="overline" color="primary" fontWeight={800}>05 / MUI + useState</Typography>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>A stateful button</Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>MUI handles the button design. React handles state and logic.</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h3" fontWeight={800} color="primary">{count}</Typography>
              <Button variant="contained" onClick={increment}>Increment</Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3, borderRadius: 3, overflow: 'hidden' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="overline" color="primary" fontWeight={800}>01 / The idea</Typography>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>What is Material UI?</Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                MUI is a library of ready-made React components. Instead of building every button and input from scratch, you use a component and customize it with props.
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Button" color="primary" />
                <Chip label="Typography" variant="outlined" />
                <Chip label="Card" variant="outlined" />
                <Chip label="TextField" variant="outlined" />
              </Stack>
            </CardContent>
            <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: '#eef3ff' }}>
              <Typography variant="subtitle2" fontWeight={800} sx={{ mb: 1 }}>Regular HTML</Typography>
              <Box component="pre" sx={{ m: 0, mb: 2, p: 2, borderRadius: 2, bgcolor: '#172033', color: '#d4def0', overflow: 'auto', fontSize: 13 }}>{`<button>Login</button>\n\nbutton {\n  background-color: blue;\n  color: white;\n}`}</Box>
              <Typography variant="subtitle2" fontWeight={800} sx={{ mb: 1 }}>MUI component</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box component="pre" sx={{ m: 0, p: 1.5, borderRadius: 2, bgcolor: '#fff', color: '#3264c8', overflow: 'auto', fontSize: 13 }}>{`<Button variant="contained">\n  Login\n</Button>`}</Box>
                <Button variant="contained" sx={{ px: 3 }}>Login</Button>
              </Stack>
            </Box>
          </Box>
        </Card>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' }, gap: 3, mb: 3 }}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 20px 60px rgba(23,32,51,.1)' }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
                <Box><Typography variant="overline" color="primary" fontWeight={800}>MUI building blocks</Typography><Typography variant="h4" fontWeight={800}>One library, many interfaces.</Typography></Box>
                <Chip label="4 concepts" color="warning" variant="outlined" />
              </Stack>
              <Stack spacing={1.5}>
                {lessons.map((lesson) => (
                  <Paper key={lesson.label} variant="outlined" sx={{ p: 1.5, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ display: 'grid', placeItems: 'center', width: 38, height: 38, borderRadius: 2, bgcolor: '#e8f0ff', color: '#3264c8' }}>{lesson.icon}</Box>
                    <Box><Typography fontWeight={800}>{lesson.label}</Typography><Typography variant="body2" color="text.secondary">{lesson.detail}</Typography></Box>
                  </Paper>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 3, bgcolor: '#172033', color: '#fff' }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="overline" sx={{ color: '#f2b84b', fontWeight: 800 }}>Props + sx</Typography>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>Style with intent.</Typography>
              <Typography sx={{ color: '#b6c0d2', lineHeight: 1.7, mb: 3 }}>MUI components accept props for behavior and an sx object for local styling. No new CSS file required.</Typography>
              <Box component="pre" sx={{ m: 0, p: 2, overflow: 'auto', borderRadius: 2, bgcolor: '#0e1524', color: '#b9e3c6', fontSize: 13 }}>{`<Button variant="contained" sx={{ px: 3 }}>\n  Save lesson\n</Button>`}</Box>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '.8fr 1.2fr' }, gap: 3 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="overline" color="primary" fontWeight={800}>React state + MUI</Typography>
              <Typography variant="h5" fontWeight={800} sx={{ mb: 1 }}>Try a small form</Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>TextField, Button, and Alert working together.</Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack spacing={2}>
                  <TextField label="Your name" value={name} onChange={(event) => setName(event.target.value)} fullWidth />
                  <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ alignSelf: 'flex-start', px: 3 }}>Join the lesson</Button>
                  {submittedName && <Alert severity="success">Welcome, {submittedName}!</Alert>}
                </Stack>
              </Box>
            </CardContent>
          </Card>

          <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: '#fff7e8', border: '1px solid #f2dfbb' }}>
            <Typography variant="overline" sx={{ color: '#bd6b2d', fontWeight: 800 }}>What you can build</Typography>
            <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>A complete React interface</Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack spacing={1.5}>
              {['Responsive navigation', 'Reusable content cards', 'Accessible feedback alerts', 'Controlled forms with useState'].map((item) => (
                <Stack key={item} direction="row" spacing={1.2} alignItems="center"><CheckCircleRoundedIcon sx={{ color: '#29845a', fontSize: 20 }} /><Typography>{item}</Typography></Stack>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default App
