// toggle sandbox mode
Vars.state.rules.infiniteResources = !Vars.state.rules.infiniteResources
Call.onSetRules(Vars.state.rules)
return "sandbox mode is now " + Vars.state.rules.infiniteResources
