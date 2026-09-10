export interface MonsterItem {
  name: string;
  danger: 'Critical' | 'Extreme' | 'High' | 'Moderate' | 'Low' | 'Deceptive';
  badgeColor: string;
  audioCue: string;
  strategy: string;
  spawnRooms: string;
}

export interface CodeItem {
  code: string;
  reward: string;
  status: 'Active' | 'Expired';
}

export interface BadgeItem {
  name: string;
  rarity: 'Common' | 'Rare' | 'Master' | 'Impossible';
  description: string;
  howToGet: string;
}

export const MONSTERS_DATA: MonsterItem[] = [
  {
    name: 'Eyefestation',
    danger: 'Extreme',
    badgeColor: 'bg-red-950 text-red-400 border-red-800',
    audioCue: 'Deep green glow underwater, persistent high-pitched hum',
    strategy: 'Turn your camera completely away instantly! Do NOT maintain line of sight with the glowing green eyes through underwater observation windows. Continuous staring results in rapid health drain.',
    spawnRooms: 'Rooms 20-99 (Sub-aquatic glass corridors)',
  },
  {
    name: 'Pandemonium',
    danger: 'Critical',
    badgeColor: 'bg-purple-950 text-purple-400 border-purple-800',
    audioCue: 'Aggressive metal clanging, loud mechanical grinding screech',
    strategy: 'Enter a locker immediately. Complete the active minigame by moving your mouse cursor to stay centered within the oscillating green circle until it passes.',
    spawnRooms: 'Randomly between Rooms 30-100',
  },
  {
    name: 'The Angler',
    danger: 'High',
    badgeColor: 'bg-amber-950 text-amber-400 border-amber-800',
    audioCue: 'Flickering lights, distant deafening low rumble',
    strategy: 'Enter a locker or duck into an unlit side ventilation shaft before it tears through the main hall. Wait for the screech to fade.',
    spawnRooms: 'Rooms 10-100',
  },
  {
    name: 'Blitz',
    danger: 'Critical',
    badgeColor: 'bg-rose-950 text-rose-400 border-rose-800',
    audioCue: 'Rapid green screen distortion, blinding light flash',
    strategy: 'Fastest Angler variant! You have under 2 seconds from the audio cue to hide in a locker. Do not hesitate or look back.',
    spawnRooms: 'Rooms 25-100',
  },
  {
    name: 'Pinkie',
    danger: 'High',
    badgeColor: 'bg-pink-950 text-pink-400 border-pink-800',
    audioCue: 'High-pitched feminine wailing, NO LIGHT FLICKER',
    strategy: 'Pinkie does NOT flicker lights! You must rely purely on directional audio. As soon as you hear the distant high-pitched shriek, hide.',
    spawnRooms: 'Rooms 15-100',
  },
  {
    name: 'Froger',
    danger: 'High',
    badgeColor: 'bg-emerald-950 text-emerald-400 border-emerald-800',
    audioCue: 'Heavy wet reverberating croaks',
    strategy: 'Froger rebounds! It rushes past your locker, rebounds off the room boundary, and passes 2 to 3 more times before leaving.',
    spawnRooms: 'Rooms 20-100',
  },
  {
    name: 'Chainsmoker',
    danger: 'High',
    badgeColor: 'bg-teal-950 text-teal-400 border-teal-800',
    audioCue: 'Suffocating green gas, distant dragging heavy chain sounds',
    strategy: 'Leaves behind toxic green smoke that reduces player breath inside lockers. Enter the locker as late as possible to avoid suffocating.',
    spawnRooms: 'Rooms 35-100',
  },
  {
    name: 'Wall Dweller',
    danger: 'Moderate',
    badgeColor: 'bg-blue-950 text-blue-400 border-blue-800',
    audioCue: 'Faint wet footsteps creeping directly behind you',
    strategy: 'Turn around periodically to check your rear flank. Looking directly at it stops its advance and forces it to collapse into edible meat.',
    spawnRooms: 'Dark hallway corridors',
  },
  {
    name: 'Searchlights',
    danger: 'Extreme',
    badgeColor: 'bg-orange-950 text-orange-400 border-orange-800',
    audioCue: 'Massive submarine hum, underwater sonar pings, spotlight beams',
    strategy: 'Encountered in large flooded caverns. Avoid swimming through yellow spotlight beams. Hide beneath sunken shipping containers and steel scaffolding.',
    spawnRooms: 'Encounter Rooms (approx Room 75+)',
  },
  {
    name: 'Squiddles',
    danger: 'Moderate',
    badgeColor: 'bg-indigo-950 text-indigo-400 border-indigo-800',
    audioCue: 'Squishy suction noises in unlit dark corners',
    strategy: 'Do not shine your flashlight directly at them! Turn off flashlights and glowsticks when passing through infested doorways.',
    spawnRooms: 'Dark unpowered rooms',
  },
  {
    name: 'Void-mass',
    danger: 'Moderate',
    badgeColor: 'bg-violet-950 text-violet-400 border-violet-800',
    audioCue: 'Faint purple bioluminescent ooze inside locker seams',
    strategy: 'Inspect lockers before jumping in! If you see purple tendrils or hear wet gurgling inside, open a different locker.',
    spawnRooms: 'Any locker spawn room',
  },
  {
    name: 'Good People',
    danger: 'Deceptive',
    badgeColor: 'bg-yellow-950 text-yellow-400 border-yellow-800',
    audioCue: 'Faint breathing sounds, duplicated incorrect room numbers',
    strategy: 'Fake doors! Look closely at the room number plaque above the door. If the number sequence is wrong or you hear heavy breathing, do not open.',
    spawnRooms: 'Rooms 15-100',
  },
  {
    name: 'Turrets',
    danger: 'High',
    badgeColor: 'bg-red-900 text-red-300 border-red-700',
    audioCue: 'Red laser targeting beam, mechanical tracking servos',
    strategy: 'Sprint between protective blast barriers while the red laser is sweeping the opposite direction. Use Code Breachers to disable security consoles.',
    spawnRooms: 'Industrial security wings',
  },
  {
    name: 'Sebastian Solace',
    danger: 'Low',
    badgeColor: 'bg-cyan-950 text-cyan-400 border-cyan-800',
    audioCue: 'Shop radio music, friendly merchant dialogue',
    strategy: 'Safe merchant NPC at Room 50. Exchange Kroner for Flashbeacons, Medkits, Lanterns, and Code Breachers. Do NOT flash light in his face.',
    spawnRooms: 'Room 50 Submarine Haven',
  },
  {
    name: 'P.A.Inter',
    danger: 'Moderate',
    badgeColor: 'bg-sky-950 text-sky-400 border-sky-800',
    audioCue: 'PA system speaker crackle, electronic laugh',
    strategy: 'Facility AI. In certain rooms, it overrides door locks and unleashes environmental hazards. Reroute backup power quickly.',
    spawnRooms: 'Server core wings',
  },
  {
    name: 'Stan',
    danger: 'Low',
    badgeColor: 'bg-slate-900 text-slate-400 border-slate-700',
    audioCue: 'Gentle squeaking sound',
    strategy: 'Passive easter egg creature. Completely harmless; yields secret badge upon interaction.',
    spawnRooms: 'Hidden maintenance ducts',
  }
];

export const ACTIVE_CODES: CodeItem[] = [
  { code: 'sled dolphin', reward: '500 Kroner + 1 Revive', status: 'Active' },
  { code: 'WasteOfTime', reward: 'Free Badge & 2 Extra Kroner', status: 'Active' },
  { code: 'Gullible', reward: '300 Kroner', status: 'Active' },
  { code: 'Submarine2026', reward: 'Free Flashbeacon', status: 'Active' },
  { code: 'PressureLaunch', reward: '400 Kroner', status: 'Active' },
];

export const BADGES_DATA: BadgeItem[] = [
  { name: 'Meet Sebastian', rarity: 'Common', description: 'Reach Room 50 and visit Sebastian shop.', howToGet: 'Survive the first 50 rooms.' },
  { name: 'I Did It', rarity: 'Master', description: 'Complete Room 100 and escape the facility.', howToGet: 'Defeat Searchlights and board extraction sub.' },
  { name: 'A-60 Encounter', rarity: 'Rare', description: 'Survive the ultra-rare A-60 anomaly.', howToGet: 'Survive red screen distortion in late rooms.' },
  { name: 'Locker Master', rarity: 'Rare', description: 'Beat Pandemonium minigame without taking damage.', howToGet: 'Maintain 100% center balance.' },
];
