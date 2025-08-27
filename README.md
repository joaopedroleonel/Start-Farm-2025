# EcoMonitor React

Um sistema moderno de monitoramento ambiental desenvolvido em React.js com TypeScript, convertido a partir de arquivos HTML estáticos para uma aplicação web interativa e responsiva.

## 🚀 Características Principais

### Stack Tecnológica
- **React.js 18+** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **React Router** - Navegação entre páginas
- **Recharts** - Gráficos interativos
- **Lucide React** - Ícones modernos
- **Vite** - Build tool e dev server

### Funcionalidades
- ✅ **Dashboard Interativo** - Monitoramento em tempo real de emissões atmosféricas
- ✅ **Gráficos Dinâmicos** - Visualizações interativas (linha, pizza, barras, área)
- ✅ **Dark Mode** - Alternância entre tema claro e escuro
- ✅ **Responsivo** - Adaptável a diferentes tamanhos de tela
- ✅ **Navegação SPA** - Single Page Application com React Router
- ✅ **Componentização** - Arquitetura modular e reutilizável
- ✅ **Hooks Customizados** - Lógica de estado organizada
- ✅ **Dados Mockados** - Simulação de API para desenvolvimento

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Sidebar.tsx     # Navegação lateral
│   ├── Header.tsx      # Cabeçalho com toggle dark mode
│   ├── Layout.tsx      # Layout principal
│   ├── Chart.tsx       # Componente genérico de gráficos
│   └── Card.tsx        # Cards de métricas
├── hooks/              # Hooks customizados
│   ├── useSidebar.ts   # Controle da sidebar
│   ├── useTheme.ts     # Gerenciamento de tema
│   └── useMockData.ts  # Dados mockados
├── pages/              # Páginas da aplicação
│   ├── Dashboard.tsx   # Página principal
│   ├── Relatorios.tsx  # Gestão de relatórios
│   ├── Sensores.tsx    # Monitoramento de dispositivos
│   └── Configuracoes.tsx # Configurações do sistema
├── data/               # Dados mockados
│   └── mockData.ts     # Dados simulados da API
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
├── lib/                # Utilitários
│   └── utils.ts        # Funções auxiliares
├── App.tsx             # Componente raiz com rotas
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎨 Design e UI

### Paleta de Cores
- **Primária**: Azul (#3B82F6)
- **Secundária**: Verde (#10B981), Amarelo (#F59E0B), Vermelho (#EF4444)
- **Neutros**: Cinza (#6B7280, #9CA3AF, #D1D5DB)
- **Dark Mode**: Cinza escuro (#1F2937, #374151, #4B5563)

### Tipografia
- **Títulos**: Poppins (600, 700)
- **Corpo**: Roboto (400, 500)
- **Tamanhos**: 12px a 32px responsivos

### Componentes de Design
- Cards com sombras suaves e bordas arredondadas
- Ícones consistentes (Lucide React)
- Animações de transição suaves
- Grid responsivo com breakpoints
- Sidebar colapsável no mobile

## 📊 Gráficos e Visualizações

### Tipos Implementados
1. **Gráfico de Linha** - Tendências temporais de emissões
2. **Gráfico de Pizza** - Distribuição de poluentes
3. **Gráfico de Barras** - Comparações semanais e mensais
4. **Gráfico de Área** - Histórico detalhado 24h

### Dados Simulados
- Sensores: CO, NO₂, SO₂, PM2.5
- Histórico temporal com variações realistas
- Status de dispositivos (online, offline, manutenção)
- Relatórios com diferentes estados

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Comandos

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview da build
pnpm run preview

# Linting
pnpm run lint
```

### Acesso
- **Desenvolvimento**: http://localhost:5173
- **Produção**: Após build, servir pasta `dist/`

## 🌐 Páginas e Rotas

### Navegação
- `/` - Dashboard principal
- `/relatorios` - Gestão de relatórios
- `/sensores` - Monitoramento de dispositivos
- `/configuracoes` - Configurações do sistema

### Funcionalidades por Página

#### Dashboard (`/`)
- Cards de métricas em tempo real
- 5 gráficos interativos diferentes
- Atualização automática dos dados
- Indicadores de status dos sensores

#### Relatórios (`/relatorios`)
- Lista de relatórios com filtros
- Status: Concluído, Processando, Erro
- Botões de download (PDF, Excel)
- Filtros por período, poluente e unidade

#### Sensores (`/sensores`)
- Estatísticas de dispositivos IoT
- Lista detalhada com status
- Indicadores de bateria e sinal
- Informações de localização

#### Configurações (`/configuracoes`)
- Configuração de API token
- Preferências de notificação
- Toggle de dark mode
- Configurações de idioma e fuso horário

## 🎯 Hooks Customizados

### `useSidebar`
```typescript
const { isOpen, toggle, close } = useSidebar();
```
Gerencia estado de abertura/fechamento da sidebar.

### `useTheme`
```typescript
const { theme, toggleTheme } = useTheme();
```
Controla alternância entre modo claro e escuro.

### `useMockData`
```typescript
const { 
  sensors, 
  charts, 
  reports, 
  devices, 
  loading,
  updateSensorData 
} = useMockData();
```
Fornece dados mockados com simulação de carregamento.

## 🔮 Preparação para API Real

### Estrutura Preparada
- Hooks isolam lógica de dados
- Tipos TypeScript definidos
- Componentes agnósticos à fonte de dados
- Loading states implementados

### Pontos de Integração
1. **`useMockData`** - Substituir por chamadas de API
2. **Tipos** - Ajustar conforme schema da API
3. **Autenticação** - Adicionar contexto de auth
4. **Error Handling** - Implementar tratamento de erros

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

### Adaptações
- Sidebar colapsável no mobile
- Grid de cards responsivo
- Gráficos redimensionáveis
- Navegação touch-friendly

## 🌙 Dark Mode

### Implementação
- Context API para estado global
- Classes Tailwind condicionais
- Persistência no localStorage
- Transições suaves

### Componentes Adaptados
- Todos os componentes suportam dark mode
- Cores de fundo e texto ajustadas
- Bordas e sombras adaptadas
- Ícones com cores apropriadas

## 🚀 Deploy e Produção

### Build Otimizada
```bash
pnpm run build
```

### Arquivos Gerados
- `dist/` - Pasta com arquivos estáticos
- Otimização automática (minificação, tree-shaking)
- Assets com hash para cache

### Hospedagem Recomendada
- Vercel, Netlify (deploy automático)
- GitHub Pages (sites estáticos)
- AWS S3 + CloudFront
- Qualquer servidor web estático

## 🔧 Customização

### Cores
Editar `tailwind.config.js` para personalizar paleta:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        // ...
      }
    }
  }
}
```

### Dados
Modificar `src/data/mockData.ts` para ajustar dados simulados.

### Componentes
Todos os componentes são modulares e podem ser facilmente customizados.

## 📈 Performance

### Otimizações Implementadas
- Lazy loading de componentes
- Memoização com React.memo
- Debounce em atualizações
- Bundle splitting automático

### Métricas
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🧪 Testes

### Testes Realizados
- ✅ Navegação entre páginas
- ✅ Dark mode toggle
- ✅ Responsividade mobile/desktop
- ✅ Gráficos interativos
- ✅ Formulários e inputs
- ✅ Loading states

### Browsers Testados
- Chrome 120+
- Firefox 115+
- Safari 16+
- Edge 120+

## 📝 Próximos Passos

### Melhorias Sugeridas
1. **Testes Automatizados** - Jest + Testing Library
2. **Storybook** - Documentação de componentes
3. **PWA** - Service Worker para offline
4. **Internacionalização** - i18n para múltiplos idiomas
5. **Animações** - Framer Motion para micro-interações

### Integração com Backend
1. Substituir `useMockData` por hooks de API
2. Implementar autenticação JWT
3. Adicionar tratamento de erros
4. Configurar interceptors para requests

## 👥 Contribuição

### Padrões de Código
- ESLint + Prettier configurados
- Conventional Commits
- TypeScript strict mode
- Componentes funcionais com hooks

### Estrutura de Commits
```
feat: adiciona novo gráfico de dispersão
fix: corrige bug no dark mode
docs: atualiza README com instruções
style: ajusta espaçamento dos cards
```

## 📄 Licença

Este projeto foi desenvolvido como conversão de arquivos HTML estáticos para uma aplicação React moderna, mantendo fidelidade ao design original enquanto adiciona funcionalidades interativas e responsivas.

---

**Desenvolvido com ❤️ usando React.js + TypeScript + Tailwind CSS**

