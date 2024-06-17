import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { getFirmData, createFirmData, updateFirmData, deleteFirmData } from '../../services/firmDataService';
import { getTowns } from '../../services/townService';
import { getEnergyProducts } from '../../services/energyProductService';
import { getNKIDs } from '../../services/nkidService';
import { getBiomasses } from '../../services/biomassService';
import { getPowerMeasures } from '../../services/powermeasureService';
import { getHeatMeasures } from '../../services/heatmeasureService';
import { getFirms } from '../../services/firmService';
import { FirmData, FirmDataDTO, Firm } from '../../models/IFirm';
import { IColumnConfigs } from '../../models/ITableConfig';
import tableConfig from '../table-configs/firmdata-table.json';
import { EnergyProduct } from '../../models/IBioEnergyProduct';
import { Biomass } from '../../models/IBiomass';
import { PowerMeasure, HeatMeasure } from '../../models/IMeasure';
import { NKID } from '../../models/INKID';
import { Town } from '../../models/ITowns';

const FirmDataGrid: React.FC = () => {
  const [firmData, setFirmData] = useState<FirmData[]>([]);
  const [firms, setFirms] = useState<Firm[]>([]);
  const [towns, setTowns] = useState<Town[]>([]);
  const [energyProducts, setEnergyProducts] = useState<EnergyProduct[]>([]);
  const [nkids, setNkids] = useState<NKID[]>([]);
  const [biomasses, setBiomasses] = useState<Biomass[]>([]);
  const [powerMeasures, setPowerMeasures] = useState<PowerMeasure[]>([]);
  const [heatMeasures, setHeatMeasures] = useState<HeatMeasure[]>([]);
  const [selectedFirmData, setSelectedFirmData] = useState<FirmData | null>(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<FirmDataDTO>({
    firm: { id: '', eik: 0, name: '', description: '', address: '', town: { id: '', name: '', municipality: '', latitude: 0, longtitude: 0, ekatte: 0 }, email: '', startYear: '', endYear: null, status: '' },
    firmName: '',
    product: { id: '', cnCode: '', bulName: '', name: '', biotech: false, description: '' },
    nkid: { id: '', category: '', groupKID: '', sector:''  },
    source: { id: '', cnCode: '', cpidCode: '', name: '', bulName: '', description: '' },
    power: 0,
    measure: { id: '', unit: '', description: '' },
    quantity: 0,
    quantityMeasurement: { id: '', unit: '', description: '' },
    heatQuantity: null,
    certification: '',
  });

  useEffect(() => {
    fetchFirmData();
    fetchFirms();
    fetchTowns();
    fetchEnergyProducts();
    fetchNKIDs();
    fetchBiomasses();
    fetchPowerMeasures();
    fetchHeatMeasures();
  }, []);

  const fetchFirmData = async () => {
    try {
      const response = await getFirmData();
      setFirmData(response.data);
    } catch (error) {
      console.error('Failed to fetch firm data', error);
    }
  };

  const fetchFirms = async () => {
    try {
      const response = await getFirms();
      setFirms(response.data);
    } catch (error) {
      console.error('Failed to fetch firms', error);
    }
  };

  const fetchTowns = async () => {
    try {
      const response = await getTowns();
      setTowns(response.data);
    } catch (error) {
      console.error('Failed to fetch towns', error);
    }
  };

  const fetchEnergyProducts = async () => {
    try {
      const response = await getEnergyProducts();
      setEnergyProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch energy products', error);
    }
  };

  const fetchNKIDs = async () => {
    try {
      const response = await getNKIDs();
      setNkids(response.data);
    } catch (error) {
      console.error('Failed to fetch NKIDs', error);
    }
  };

  const fetchBiomasses = async () => {
    try {
      const response = await getBiomasses();
      setBiomasses(response.data);
    } catch (error) {
      console.error('Failed to fetch biomasses', error);
    }
  };

  const fetchPowerMeasures = async () => {
    try {
      const response = await getPowerMeasures();
      setPowerMeasures(response.data);
    } catch (error) {
      console.error('Failed to fetch power measures', error);
    }
  };

  const fetchHeatMeasures = async () => {
    try {
      const response = await getHeatMeasures();
      setHeatMeasures(response.data);
    } catch (error) {
      console.error('Failed to fetch heat measures', error);
    }
  };

  const handleAddClick = () => {
    setSelectedFirmData(null);
    setFormValues({
      firm: { id: '', eik: 0, name: '', description: '', address: '', town: { id: '', name: '', municipality: '', latitude: 0, longtitude: 0, ekatte: 0 }, email: '', startYear: '', endYear: null, status: '' },
      firmName: '',
      product: { id: '', cnCode: '', bulName: '', name: '', biotech: false, description: '' },
      nkid: { id: '', category: '', groupKID: '', sector: ''  },
      source: { id: '', cnCode: '', cpidCode: '', name: '', bulName: '', description: '' },
      power: 0,
      measure: { id: '', unit: '', description: '' },
      quantity: 0,
      quantityMeasurement: { id: '', unit: '', description: '' },
      heatQuantity: null,
      certification: '',
    });
    setOpen(true);
  };

  const handleEditClick = (firmData: FirmData) => {
    setSelectedFirmData(firmData);
    setFormValues({
      firm: firmData.firm,
      firmName: firmData.firmName,
      product: firmData.product,
      nkid: firmData.nkid,
      source: firmData.source,
      power: firmData.power,
      measure: firmData.measure,
      quantity: firmData.quantity,
      quantityMeasurement: firmData.quantityMeasurement,
      heatQuantity: firmData.heatQuantity,
      certification: firmData.certification,
    });
    setOpen(true);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteFirmData(id);
      fetchFirmData();
    } catch (error) {
      console.error('Failed to delete firm data', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      if (selectedFirmData) {
        await updateFirmData(selectedFirmData.id, formValues);
      } else {
        await createFirmData(formValues);
      }
      fetchFirmData();
      handleClose();
    } catch (error) {
      console.error('Failed to save firm data', error);
    }
  };

  const parseColumns = (configJson: IColumnConfigs): GridColDef[] => {
    const columns: GridColDef[] = Object.values(configJson).map(config => {
    
      if(config.field=='firm'){
        return {
          field: config.field,
          headerName: config.headerName,
          flex: config.flex,
          valueGetter: (params:any) => params?params.name:'',
        };
      }
      if(config.field=='product'){
        return {
          field: config.field,
          headerName: config.headerName,
          flex: config.flex,
          valueGetter: (params:any) => params?params.name:'',
        };
      }
      if(config.field=='nkid'){
        return {
          field: config.field,
          headerName: config.headerName,
          flex: config.flex,
          valueGetter: (params:any) => params?params.category:'',
        };
      }
      if(config.field=='source'){
        return {
          field: config.field,
          headerName: config.headerName,
          flex: config.flex,
          valueGetter: (params:any) => params?params.name:'',
        };
      }
      if(config.field=='measure'){
        return {
          field: config.field,
          headerName: config.headerName,
          flex: config.flex,
          valueGetter: (params:any) => params?params.unit:'',
        };
      }
      if(config.field=='quantityMeasurement'){
        return {
          field: config.field,
          headerName: config.headerName,
          flex: config.flex,
          valueGetter: (params:any) => params?params.unit:'',
        };
  
      }

      return {
        field: config.field,
        headerName: config.headerName,
        flex: config.flex,
      };
    });

    // Adding the last column with the buttons
    columns.push({
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params: { row: FirmData }) => (
        <>
          <Button onClick={() => handleEditClick(params.row)}>Edit</Button>
          <Button onClick={() => handleDeleteClick(params.row.id)}>Delete</Button>
        </>
      ),
    });

    return columns;
  };

  return (
    <div style={{ height: 600, width: '100%' }}>
      <Button onClick={handleAddClick}>Add Firm Data</Button>
      <DataGrid rows={firmData} columns={parseColumns(tableConfig)} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedFirmData ? 'Edit Firm Data' : 'Add Firm Data'}</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>Firm</InputLabel>
            <Select
              value={formValues.firm.id}
              onChange={(e) => {
                const selectedFirm = firms.find(firm => firm.id === e.target.value);
                if (selectedFirm) {
                  setFormValues({ ...formValues, firm: selectedFirm });
                }
              }}
              label="Firm"
            >
              {firms.map((firm) => (
                <MenuItem key={firm.id} value={firm.id}>
                  {firm.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Firm Name"
            type="text"
            fullWidth
            value={formValues.firmName}
            onChange={(e) => setFormValues({ ...formValues, firmName: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Energy Product</InputLabel>
            <Select
              value={formValues.product.id}
              onChange={(e) => {
                const selectedEnergyProduct = energyProducts.find(ep => ep.id === e.target.value);
                if (selectedEnergyProduct) {
                  setFormValues({ ...formValues, product: selectedEnergyProduct });
                }
              }}
              label="Energy Product"
            >
              {energyProducts.map((energyProduct) => (
                <MenuItem key={energyProduct.id} value={energyProduct.id}>
                  {energyProduct.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>NKID</InputLabel>
            <Select
              value={formValues.nkid.id}
              onChange={(e) => {
                const selectedNKID = nkids.find(nkid => nkid.id === e.target.value);
                if (selectedNKID) {
                  setFormValues({ ...formValues, nkid: selectedNKID });
                }
              }}
              label="NKID"
            >
              {nkids.map((nkid) => (
                <MenuItem key={nkid.id} value={nkid.id}>
                  {nkid.category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Biomass Source</InputLabel>
            <Select
              value={formValues.source.id}
              onChange={(e) => {
                const selectedBiomass = biomasses.find(biomass => biomass.id === e.target.value);
                if (selectedBiomass) {
                  setFormValues({ ...formValues, source: selectedBiomass });
                }
              }}
              label="Biomass Source"
            >
              {biomasses.map((biomass) => (
                <MenuItem key={biomass.id} value={biomass.id}>
                  {biomass.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Power"
            type="number"
            fullWidth
            value={formValues.power}
            onChange={(e) => setFormValues({ ...formValues, power: parseFloat(e.target.value) })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Power Measure</InputLabel>
            <Select
              value={formValues.measure.id}
              onChange={(e) => {
                const selectedPowerMeasure = powerMeasures.find(pm => pm.id === e.target.value);
                if (selectedPowerMeasure) {
                  setFormValues({ ...formValues, measure: selectedPowerMeasure });
                }
              }}
              label="Power Measure"
            >
              {powerMeasures.map((measure) => (
                <MenuItem key={measure.id} value={measure.id}>
                  {measure.unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Quantity"
            type="number"
            fullWidth
            value={formValues.quantity}
            onChange={(e) => setFormValues({ ...formValues, quantity: parseInt(e.target.value, 10) })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Quantity Measurement</InputLabel>
            <Select
              value={formValues.quantityMeasurement.id}
              onChange={(e) => {
                const selectedHeatMeasure = heatMeasures.find(hm => hm.id === e.target.value);
                if (selectedHeatMeasure) {
                  setFormValues({ ...formValues, quantityMeasurement: selectedHeatMeasure });
                }
              }}
              label="Quantity Measurement"
            >
              {heatMeasures.map((measurement) => (
                <MenuItem key={measurement.id} value={measurement.id}>
                  {measurement.unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Heat Quantity"
            type="number"
            fullWidth
            value={formValues.heatQuantity ?? ''}
            onChange={(e) => setFormValues({ ...formValues, heatQuantity: parseInt(e.target.value, 10) })}
          />
          <TextField
            margin="dense"
            label="Certification"
            type="text"
            fullWidth
            value={formValues.certification ?? ''}
            onChange={(e) => setFormValues({ ...formValues, certification: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FirmDataGrid;
